/**
 * @typedef {Object} REST
 * @property {REST.actions} actions
 * @property {REST.getters} getters
 * @property {REST.mutations} mutations
 * @property {REST.updateActions} updateActions
 */
export default {
  /**
   * Mapping for actions, you can use this.$store.dispatch(REST.actions.updateUrlEndpoint)
   * or call manually this.$store.dispatch('rest/updateUrlEndpoint')
   * @typedef {Object} REST.actions
   * @property {String} updateUrlEndpoint - rest/updateUrlEndpoint
   * @property {String} createModel - rest/createModel
   * @property {String} updateModel
   * @property {String} deleteModel
   */
  actions: {
    updateUrlEndpoint: 'rest/updateUrlEndpoint',
    createModel: 'rest/createModel',
    updateModel: 'rest/updateModel',
    deleteModel: 'rest/deleteModel',
    getServices: 'rest/getServices'
  },
  /**
   * @typedef {Object} REST.getters
   * @property {String} readUrlEndpoint
   */
  getters: {
    readUrlEndpoint: 'rest/readUrlEndpoint',
    readEndpointState: 'rest/readEndpointState'
  },
  /**
   * @typedef {Object} REST.mutations
   * @property {String} updateEndpoint
   */
  mutations: {
    updateEndpoint: 'rest/updateEndpoint'
  },
  /**
   * @typedef {Object} REST.updateActions
   * @property {String} append - insert to start
   * @property {String} prepend - insert to end
   * @property {String} replaceSame - replace model
   * @property {String} replace - replace all endpoint
   * @property {String} insertAfter - insert after model
   */
  updateActions: {
    append: 'append',
    prepend: 'prepend',
    replaceSame: 'replaceSame',
    replace: 'replace',
    insertAfter: 'insertAfter'
  }
}
