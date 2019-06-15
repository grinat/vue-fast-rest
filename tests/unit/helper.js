import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'

import {plugin, DefaultRestClient} from '../../src/index'
import {createFixtures} from './fixtures'

export function getInitedInstances() {
  const localVue = createLocalVue()

  localVue.use(Vuex)

  const store = new Vuex.Store({
    state: {},
    getters: {},
    mutations: {},
    actions: {}
  })

  const restClient = getMockedRestClient()
  localVue.use(plugin, { store, restClient })

  return {
    localVue,
    store,
    restClient
  }
}

class MockedRestClient extends DefaultRestClient {
  constructor () {
    super()
    this.fixtures = createFixtures()
    this._logs = []
  }

  async create (store, url, data, params) {
    const dto = Object.assign({
      // create object with id
      id: +new Date(),
      copyright: 'data created on server'
    }, this.fixtures[url].data, data)

    this._logReq(url, params)

    return Promise.resolve({
      data: dto
    })
  }

  async read (store, url, params) {
    this._logReq(url, params)

    return Promise.resolve(this.fixtures[url])
  }

  async update (store, url, data, params) {
    const dto = Object.assign({
      copyright: 'data updated on server'
    }, this.fixtures[url].data, data)

    this._logReq(url, params)

    return Promise.resolve({
      data: dto
    })
  }

  async delete (store, url, params) {
    this._logReq(url, params)

    return Promise.resolve(this.fixtures[url])
  }

  _logReq (url) {
    this._logs.push({ url })
  }
}

export function getMockedRestClient() {
  return new MockedRestClient()
}
