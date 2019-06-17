import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'

import {plugin} from '../../src/index'

export function getInitedInstances() {
  const localVue = createLocalVue()

  localVue.use(Vuex)

  const store = new Vuex.Store({
    state: {},
    getters: {},
    mutations: {},
    actions: {}
  })

  localVue.use(plugin, { store })

  return {
    localVue,
    store
  }
}
