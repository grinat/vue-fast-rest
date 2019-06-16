import DefaultRestClient from './http/DefaultRestClient'
import REST from './types/types'
import storeModule from './store/index'
import {defaultConfig} from './config'
import {services} from './types/services'

/**
 * @param {Vue} Vue
 * @param {Options} options
 * @param {Vuex.Store()} options.store
 * @param {DefaultRestClient()} options.restClient
 * @param {Object} options.services
 * @param {Boolean} options.preserveState
 * @param {PluginConfig} options.config
 */
function plugin (Vue, { store, restClient = new DefaultRestClient(), services: inpServices = {}, preserveState = false, config = {} }) {
  if (!store) {
    throw Error(`
You need to pass store into plugin:    
    const store = new Vuex.Store() <-- create store or import you store
    
    import { plugin } from 'vue-fast-rest'
    Vue.use(plugin, { store }) <-- pass store to plugin
    `)
  }

  const servicesObj = Object.assign(services, {
    restClient,
    store: null,
    services: inpServices,
    config: Object.assign(defaultConfig, config)
  })

  storeModule.actions = {
    ...storeModule.actions,
    /**
     * @return {Promise<{services}>}
     */
    getServices: function () {
      servicesObj.store = this
      return Promise.resolve(servicesObj)
    }
  }
  store.registerModule('rest', storeModule, { preserveState })
}

export {
  plugin,
  DefaultRestClient,
  REST
}

if (typeof window !== 'undefined' && window.Vue) {
  window.VueFastRest = {
    plugin,
    DefaultRestClient,
    REST
  }
}
