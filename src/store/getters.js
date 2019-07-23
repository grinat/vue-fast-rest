import {CRUD_ACTIONS} from '../types/crud-actions'

/**
 * @private
 */
export default class getters {
  /**
   * @param state
   * @return {function(endpoint: string): Object|null}
   */
  static readUrlEndpoint = state => (endpoint, notReactive = false) => {
    if (notReactive === true) {
      return state.notReactiveEndpoints[endpoint] || null
    }
    return state.endpoints[endpoint] || null
  }

  /**
   * @param state
   * @return {function(endpoint: string): Object}
   */
  static readEndpointState = state => (endpoint) => {
    return state.endpointsState[endpoint] || {
      [CRUD_ACTIONS.create]: null,
      [CRUD_ACTIONS.read]: null,
      [CRUD_ACTIONS.update]: null,
      [CRUD_ACTIONS.delete]: null
    }
  }
}
