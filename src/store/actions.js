import {createOfflineResponse} from '../utils/helpers'
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
   * @param {Boolean} options.notReactive - save loaded data in not reactive store (usage for bigdata for map and etc.)
   * @param {Number} options.cache
   * @param {Number} options.preferCache - get data from cache if exist
   * @param {axios.config|Object} options.params - see {@link https://github.com/axios/axios#request-config}
   * @param {Boolean} options.offline
   * @returns {Promise<Object|Error>}
   * @example
   * import {REST} from 'vue-fast-rest'
   *
   * const rawResponse = await this.$store.dispatch(REST.actions.updateUrlEndpoint, {
   *    url: 'https://faap-app.herokuapp.com/faap/v1/books',
   *    endpoint: 'my-books'
   *  })
   * const dataFromStore = await this.$store.getters[REST.getters.readUrlEndpoint]('my-books')
   * console.log(rawResponse, dataFromStore)
   */
  static async updateUrlEndpoint(context, {url = null, endpoint = null, insertMany = false, cache = null, params, offline = false, notReactive = false, preferCache = false}) {
    const services = await context.dispatch('getServices')
    if (cache === null) {
      cache = services.config.cache
    }

    if (preferCache === true) {
      if (notReactive === true && context.state.notReactiveEndpoints[endpoint]) {
        return {data: context.state.notReactiveEndpoints[endpoint]}
      } else if (context.state.endpoints[endpoint]) {
        return {data: context.state.endpoints[endpoint]}
      }
    }

    if (offline === true) {
      if (context.state.endpoints[endpoint]) {
        return {data: context.state.endpoints[endpoint]}
      }
      const offlineResponse = {data: {data: []}}
      if (endpoint) {
        context.commit('updateCache', {endpoint, cache})
        context.commit('updateEndpoint', {endpoint, response: offlineResponse, insertMany, notReactive})
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
        context.commit('updateEndpoint', {endpoint, response, insertMany, notReactive})
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
   * @param {Object|FormData} options.data
   * @param {String} options.endpoint - Endpoint where saved model(if null, response not saved in store)
   * @param {Boolean} options.notReactive - save data in not reactive store (usage for bigdata for map and etc.)
   * @param {axios.config|Object} options.params - see {@link https://github.com/axios/axios#request-config}
   * @param {REST.updateActions} options.action - What do with model
   * @param {String|Number} options.id
   * @param {Boolean} options.offline
   * @returns {Promise<Object|Error>}
   * @example
   * import {REST} from 'vue-fast-rest'
   *
   * const createResponse = await this.$store.dispatch(REST.actions.createModel, {
   *    url: 'https://faap-app.herokuapp.com/faap/v1/books',
   *    endpoint: 'my-books',
   *    data: {
   *      title: 'My little pony'
   *    }
   *  })
   * const storeWithCreatedModel = await this.$store.getters[REST.getters.readUrlEndpoint]('my-books')
   * console.log(createResponse, storeWithCreatedModel)
   */
  static async createModel (context, {url = null, data, endpoint = null, params, action = REST.updateActions.append, id, offline = false, notReactive = false}) {
    const services = await context.dispatch('getServices')

    if (offline === true) {
      const offlineResponse = createOfflineResponse(data)
      if (endpoint) {
        context.commit('updateEndpoint', {response: offlineResponse, endpoint, action, id, notReactive})
      }
      return offlineResponse
    }

    endpoint && context.commit('setEndpointState', {type: CRUD_ACTIONS.read, loading: true, endpoint})
    return services.restClient.create(
      services, url, data, params
    ).then(response => {
      if (endpoint) {
        context.commit('updateEndpoint', {response, endpoint, action, id, notReactive})
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
   * @param {Object|FormData} options.data
   * @param {String} options.endpoint - Endpoint where saved model(if null, response not saved in store)
   * @param {Boolean} options.notReactive
   * @param {axios.config|Object} options.params - see {@link https://github.com/axios/axios#request-config}
   * @param {String|Number} options.id
   * @param {REST.updateActions} options.action - What do with model
   * @param {Boolean} options.offline - dont send response to server
   * @returns {Promise<Object|Error>}
   * @example
   * import {REST} from 'vue-fast-rest'
   *
   * const updResponse = await this.$store.dispatch(REST.actions.updateModel, {
   *    url: 'https://faap-app.herokuapp.com/faap/v1/books/5d7f4bce80dd08001e9a309b',
   *    endpoint: 'my-books',
   *    data: {
   *      title: 'My biggest pony'
   *    },
   *    id: '5d7f4bce80dd08001e9a309b'
   *  })
   * const storeWithUpdatedModel = await this.$store.getters[REST.getters.readUrlEndpoint]('my-books')
   * console.log(updResponse, storeWithUpdatedModel)
   */
  static async updateModel (context, {url = null, data, id, endpoint = null, params, offline = false, notReactive = false, action = REST.updateActions.replaceSame}) {
    const services = await context.dispatch('getServices')

    if (offline === true) {
      const offlineResponse = createOfflineResponse(data)
      if (endpoint) {
        context.commit('updateEndpoint', {response: offlineResponse, id, endpoint, action, notReactive})
      }
      return offlineResponse
    }

    endpoint && context.commit('setEndpointState', {type: CRUD_ACTIONS.update, loading: true, endpoint})
    return await services.restClient.update(
      services, url, data, params
    ).then(response => {
      if (endpoint) {
        context.commit('updateEndpoint', {response, id, endpoint, action, notReactive})
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
   * @param {Boolean} options.notReactive
   * @param {axios.config|Object} options.params - see {@link https://github.com/axios/axios#request-config}
   * @param {Array<number|string>} options.ids - Array of id to remove
   * @param {Boolean} options.offline - dont send response to server
   * @returns {Promise<Object|Error>}
   * @example
   * import {REST} from 'vue-fast-rest'
   *
   * const rmResponse = await this.$store.dispatch(REST.actions.deleteModel, {
   *    url: 'https://faap-app.herokuapp.com/faap/v1/books/5d7f4bce80dd08001e9a309b',
   *    endpoint: 'my-books',
   *    ids: ['5d7f4bce80dd08001e9a309b']
   *  })
   * const storeWithoutRemoveModels = await this.$store.getters[REST.getters.readUrlEndpoint]('my-books')
   * console.log(rmResponse, storeWithoutRemoveModels)
   */
  static async deleteModel (context, {url = null, endpoint = null, ids, params, offline = false, notReactive = false}) {
    const services = await context.dispatch('getServices')

    if (offline === true) {
      if (endpoint) {
        context.commit('deleteModel', {endpoint, ids, notReactive})
      }
      return true
    }

    endpoint && context.commit('setEndpointState', {type: CRUD_ACTIONS.delete, loading: true, endpoint})
    return services.restClient.delete(
      services, url, params
    ).then(response => {
      if (endpoint) {
        context.commit('deleteModel', {endpoint, ids, notReactive})
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
