import axios from 'axios/dist/axios'

export default class {

  /**
   * @param {services} services
   * @param {Object} reqParameters - request parameters (url, axios config, etc)
   * @param {Object} reqParameters.url
   * @param {Object} reqParameters.params
   * @returns {Promise<void>}
   */
  // eslint-disable-next-line
  async beforeRequest (services, reqParameters) {}

  /**
   * @param {services} services
   * @param {string} url
   * @param {Object} params - see {@link https://github.com/axios/axios#request-config}
   * @param {Object} params.method - get/post/put/patch/delete
   * @param {Array<function(data: string, headers: Object): Object|null>} params.transformRequest
   * @param {Array<function(data: Object): Object|null>} params.transformResponse
   * @returns {Promise<Object>}
   */
  async getReqConfig (services, url, params = {}) {
    if (services.store.getters.authToken) {
      if (!params.headers) {
        params.headers = {}
      }

      params.headers['Authorization'] = 'Bearer ' + services.store.getters.authToken
    }
    return params
  }

  /**
   * @param {services} services
   * @param {Object} error
   * @param {Object} error.config
   * @param {String} error.config.url
   * @param {String} error.config.method - get/post/put/patch/delete
   * @param {Object} error.response - see {@link https://github.com/axios/axios#response-schema}
   * @param {Object} error.request - see {@link https://github.com/axios/axios#request-config}
   * @param {Object} reqParameters - request parameters (url, axios config, etc)
   * @param {Object} reqParameters.url
   * @param {Object} reqParameters.params
   * @returns {Promise<never>}
   */
  // eslint-disable-next-line no-unused-vars
  async onError (services, error, reqParameters) {
    return Promise.reject(error)
  }

  /**
   * @param {services} services
   * @param {Object} response - see {@link https://github.com/axios/axios#response-schema}
   * @param {Object} response.data - Object returned from server
   * @param {Object} response.config
   * @returns {Promise<*>}
   */
  async onResponse (services, response) {
    return response
  }

  async create (services, url, data, params) {
    try {
      await this.beforeRequest(services, {url, params})

      const config = await this.getReqConfig(services, url, params)

      let response = await this.getHTTPLibInstance().post(url, data, config)
      response = await this.onResponse(services, response)

      return response
    } catch (e) {
      return this.onError(services, e, {url, params})
    }
  }

  async read (services, url, params) {
    try {
      await this.beforeRequest(services, {url, params})

      const config = await this.getReqConfig(services, url, params)

      let response = await this.getHTTPLibInstance().get(url, config)
      response = await this.onResponse(services, response)

      return response
    } catch (e) {
      return this.onError(services, e, {url, params})
    }
  }

  async update (services, url, data, params) {
    try {
      await this.beforeRequest(services, {url, params})

      const config = await this.getReqConfig(services, url, params)

      let response = await this.getHTTPLibInstance().patch(url, data, config)
      response = await this.onResponse(services, response)

      return response
    } catch (e) {
      return this.onError(services, e, {url, params})
    }
  }

  async delete (services, url, params) {
    try {
      await this.beforeRequest(services, {url, params})

      const config = await this.getReqConfig(services, url, params)

      let response = await this.getHTTPLibInstance().delete(url, config)
      response = await this.onResponse(services, response)

      return response
    } catch (e) {
      return this.onError(services, e, {url, params})
    }
  }

  /**
   * @returns {AxiosInstance}
   */
  getHTTPLibInstance () {
    return axios
  }

}
