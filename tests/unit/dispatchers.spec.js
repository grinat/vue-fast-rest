/* global it,describe */
import { expect } from 'chai'
import {shallowMount} from '@vue/test-utils'

import {URLS} from './fixtures'
import {getInitedInstances} from './helper'
import {REST} from '../../src/index'

describe('dispatchers', () => {
  it('check create/read/update/remove by dispatchers in vue component', async () => {
    // run local express server for testing with real rest client
    const port = process.env.PORT || 1234
    const {server} = require('./server').initAndRunFixtureServer({
      port
    })

    const ROOT_API = `http://localhost:${port}`

    const {localVue, store} = getInitedInstances()

    const wrapper = shallowMount({
      template: '<div>{{items}}</div>',
      computed: {
        items () {
          return this.$store.getters[REST.getters.readUrlEndpoint](
            ROOT_API + URLS.books
          )
        }
      },
      methods: {
        createItemInEndpoint (title) {
          return this.$store.dispatch(REST.actions.createModel, {
            url: ROOT_API + URLS.createBook,
            endpoint: ROOT_API + URLS.books,
            data: { title }
          })
        },
        createItemWithoutEndpoint (title) {
          return this.$store.dispatch(REST.actions.createModel, {
            url: ROOT_API + URLS.createBook,
            data: { title }
          })
        },
        removeItemFromEndpoint (id) {
          return this.$store.dispatch(REST.actions.deleteModel, {
            url: ROOT_API + URLS.removeBook,
            endpoint: ROOT_API + URLS.books,
            ids: [id]
          })
        },
        updateItemInEndpoint (id, title) {
          return this.$store.dispatch(REST.actions.updateModel, {
            url: ROOT_API + URLS.updateBook,
            endpoint: ROOT_API + URLS.books,
            id,
            data: { title, id }
          })
        },
        fetch () {
          return this.$store.dispatch(REST.actions.updateUrlEndpoint, {
            endpoint: ROOT_API + URLS.books
          })
        }
      }
    }, {
      localVue,
      store
    })

    // read data form server
    await wrapper.vm.fetch()
    expect(wrapper.vm.items,'server return data').to.have.nested.property('data[0].title')
    expect(wrapper.text()).to.include('title')

    // create item on server and dont put in endpoint
    const title = 'Foo abr'
    await wrapper.vm.createItemWithoutEndpoint()
    wrapper.vm.items.data.forEach(obj => {
      expect(obj, `created item must not inserted into books endpoint`).to.not.include({title: title})
    })

    // create item on server and put to endpoint
    const titleOnServer = 'Bar bar to server bar'
    await wrapper.vm.createItemInEndpoint(titleOnServer)
    const lastIndex = wrapper.vm.items.data.length - 1
    expect(wrapper.vm.items, 'created item must be at end').to.have.nested.property(`data[${lastIndex}].title`, titleOnServer)
    expect(wrapper.vm.items, 'created item must be at end').to.have.nested.property(`data[${lastIndex}].copyright`)
    expect(wrapper.text(), 'template updated with new data').to.include(titleOnServer)

    // remove item in endpoint
    const { id: removeId, title: removeTitle} = wrapper.vm.items.data[0]
    expect(wrapper.text()).to.include(removeTitle)
    await wrapper.vm.removeItemFromEndpoint(removeId)
    wrapper.vm.items.data.forEach(obj => {
      expect(obj, `removed item must not in data`).to.not.include({id: removeId})
    })
    expect(wrapper.text()).not.to.include(removeTitle)

    // update item in endpoint
    const updId = wrapper.vm.items.data[0].id
    const updTitle = 'Jsdns ew wqjqwe'
    await wrapper.vm.updateItemInEndpoint(updId, updTitle)
    expect(wrapper.vm.items.data[0]).to.include({ title: updTitle })
    expect(wrapper.text()).to.include(updTitle)

    // wait for local server close
    await new Promise(resolve => server.close(resolve))

  }).timeout(30000)
})
