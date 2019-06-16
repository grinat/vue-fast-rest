import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

export default {
  namespaced: true,
  state,
  // pass manually from static class
  // for correct generate autodocs
  getters: {
    readUrlEndpoint: getters.readUrlEndpoint,
    readEndpointState: getters.readEndpointState
  },
  actions: {
    updateUrlEndpoint: actions.updateUrlEndpoint,
    createModel: actions.createModel,
    updateModel: actions.updateModel,
    deleteModel: actions.deleteModel,
    getServices: actions.getServices
  },
  mutations: {
    deleteModel: mutations.deleteModel,
    setEndpointState: mutations.setEndpointState,
    updateEndpoint: mutations.updateEndpoint,
    updateCache: mutations.updateCache
  }
}
