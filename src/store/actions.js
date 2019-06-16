import {Uuid} from '../utils/Uuid'
import REST from '../types/types'
import {CRUD_ACTIONS} from '../types/crud-actions'
import {services} from '../types/services'

/**
 * @private
 */
export default class actions {

  /**
   * @param {Vuex.Store} context
   * @param {Object} options
   * @param {String} options.url - optional, url where send response(if null, used endpoint
   * @param {String} options.endpoint - Where save data(if null, response not saved in store)
   * @param {Boolean} options.insertMany
   * @param {Number} options.cache
   * @param {axios.config|Object} options.params - see {@link https://github.com/axios/axios#request-config}
   * @param {Boolean} options.offline
   * @returns {Promise<Object|Error>}
   */
  static async updateUrlEndpoint (context, {url = null, endpoint = null, insertMany = false, cache = null, params, offline = false}) {
    const services = await context.dispatch('getServices')
    if (cache === null) {
      cache = services.config.cache
    }

    if (offline === true) {
      if (context.state.endpoints[endpoint]) {
        return {data: context.state.endpoints[endpoint]}
      }
      const offlineResponse = {data: {data: []}}
      if (endpoint) {
        context.commit('updateCache', {endpoint, cache})
        context.commit('updateEndpoint', {endpoint, response: offlineResponse, insertMany})
      }
      return offlineResponse
    }

    const currentTime = +new Date()
    const endpointExist = context.state.endpoints[endpoint] && context.state.cache[endpoint]
    if (endpointExist && context.state.cache[endpoint] > currentTime) {
      return {data: context.state.endpoints[endpoint]}
    }

    endpoint && context.commit('setEndpointState', {loading: true, endpoint})
    return services.restClient.read(
      services, url || endpoint, params
    ).then(response => {
      if (endpoint) {
        context.commit('updateCache', {endpoint, cache})
        context.commit('updateEndpoint', {endpoint, response, insertMany})
      }

      endpoint && context.commit('setEndpointState', {loading: false, endpoint})

      return response
    }).catch(e => {
      endpoint && context.commit('setEndpointState', {loading: false, endpoint})

      return Promise.reject(e)
    })
  }

  /**
   * @param {Vuex.Store} context
   * @param {Object} options
   * @param {String} options.url - Url where send response
   * @param {Object} options.data
   * @param {String} options.endpoint - Endpoint where saved model(if null, response not saved in store)
   * @param {axios.config|Object} options.params - see {@link https://github.com/axios/axios#request-config}
   * @param {REST.updateActions} options.action - What do with model
   * @param {String|Number} options.id
   * @param {Boolean} options.offline
   * @returns {Promise<Object|Error>}
   */
  static async createModel (context, {url = null, data: form, endpoint = null, params, action = REST.updateActions.append, id, offline = false}) {
    const services = await context.dispatch('getServices')

    const data = {...form}

    if (offline === true) {
      data._storeUUID = Uuid.generate()
      const offlineResponse = {data}
      if (endpoint) {
        context.commit('updateEndpoint', {response: offlineResponse, endpoint, action, id})
      }
      return offlineResponse
    }

    endpoint && context.commit('setEndpointState', {type: CRUD_ACTIONS.read, loading: true, endpoint})
    return services.restClient.create(
      services, url, data, params
    ).then(response => {
      if (endpoint) {
        context.commit('updateEndpoint', {response, endpoint, action, id})
      }

      endpoint && context.commit('setEndpointState', {type: CRUD_ACTIONS.read, loading: false, endpoint})

      return response
    }).catch(e => {
      endpoint && context.commit('setEndpointState', {type: CRUD_ACTIONS.read, loading: false, endpoint})

      return Promise.reject(e)
    })
  }

  /**
   * @param {Vuex.Store} context
   * @param {Object} options
   * @param {String} options.url - Url where send response
   * @param {Object} options.data
   * @param {String} options.endpoint - Endpoint where saved model(if null, response not saved in store)
   * @param {axios.config|Object} options.params - see {@link https://github.com/axios/axios#request-config}
   * @param {String|Number} options.id
   * @param {Boolean} options.offline - dont send response to server
   * @returns {Promise<Object|Error>}
   */
  static async updateModel (context, {url = null, data: form, id, endpoint = null, params, offline = false}) {
    const services = await context.dispatch('getServices')
    const action = REST.updateActions.replaceSame

    const data = {...form}

    if (offline === true) {
      if (!data.hasOwnProperty('_storeUUID')) {
        data._storeUUID = Uuid.generate()
      }
      const offlineResponse = {data}
      if (endpoint) {
        context.commit('updateEndpoint', {response: offlineResponse, id, endpoint, action})
      }
      return offlineResponse
    }

    endpoint && context.commit('setEndpointState', {type: CRUD_ACTIONS.update, loading: true, endpoint})
    return await services.restClient.update(
      services, url, data, params
    ).then(response => {
      if (endpoint) {
        context.commit('updateEndpoint', {response, id, endpoint, action})
      }

      endpoint && context.commit('setEndpointState', {type: CRUD_ACTIONS.update, loading: false, endpoint})

      return response
    }).catch(e => {
      endpoint && context.commit('setEndpointState', {type: CRUD_ACTIONS.update, loading: false, endpoint})

      return Promise.reject(e)
    })
  }

  /**
   * @param {Vuex.Store} context
   * @param {Object} options
   * @param {String} options.url - Url where send response
   * @param {String} options.endpoint - Endpoint where delete model(if null, not removed from endpoint)
   * @param {axios.config|Object} options.params - see {@link https://github.com/axios/axios#request-config}
   * @param {Array<number|string>} options.ids - Array of id to remove
   * @param {Boolean} options.offline - dont send response to server
   * @returns {Promise<Object|Error>}
   */
  static async deleteModel (context, {url = null, endpoint = null, ids, params, offline = false}) {
    const services = await context.dispatch('getServices')

    if (offline === true) {
      if (endpoint) {
        context.commit('deleteModel', {endpoint, ids})
      }
      return true
    }

    endpoint && context.commit('setEndpointState', {type: CRUD_ACTIONS.delete, loading: true, endpoint})
    return services.restClient.delete(
      services, url, params
    ).then(response => {
      if (endpoint) {
        context.commit('deleteModel', {endpoint, ids})
      }

      endpoint && context.commit('setEndpointState', {type: CRUD_ACTIONS.delete, loading: false, endpoint})

      return response
    }).catch(e => {

      endpoint && context.commit('setEndpointState', {type: CRUD_ACTIONS.delete, loading: false, endpoint})

      return Promise.reject(e)
    })
  }

  /**
   * @returns {Promise<services>}
   */
  static async getServices () {
    return Promise.resolve(services)
  }
}
