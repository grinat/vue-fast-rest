import DefaultRestClient from './api/DefaultRestClient'
import REST from './store-module/types'
import storeModule from './store-module/index'

function plugin (Vue, { store, restClient = new DefaultRestClient(), services = {}, preserveState = false, config = {} }) {
  if (!store) {
    throw Error(`
You need to pass store into plugin:    
    const store = new Vuex.Store() <-- create store or import you store
    
    import { plugin } from 'vue-fast-rest'
    Vue.use(plugin, { store }) <-- pass store to plugin
    `)
  }

  const defaultConfig = {
    cache: 0 // cache endpoints in miliseconds
  }

  storeModule.actions = {
    ...storeModule.actions,
    getServices: function () {
      return Promise.resolve({
        restClient,
        store: this,
        services,
        config: Object.assign(defaultConfig, config)
      })
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
