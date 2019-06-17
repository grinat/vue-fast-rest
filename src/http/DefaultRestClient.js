import axios from 'axios/dist/axios'

export default class {

  /**
   * @param {services} services
   * @returns {Promise<void>}
   */
  // eslint-disable-next-line
  async beforeRequest (services) {}

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
   * @returns {Promise<never>}
   */
  async onError (services, error) {
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
    await this.beforeRequest(services)

    const config = await this.getReqConfig(services, url, params)

    return axios.post(url, data, config)
      .then(response => this.onResponse(services, response))
      .catch(error => this.onError(services, error))
  }

  async read (services, url, params) {
    await this.beforeRequest(services)

    const config = await this.getReqConfig(services, url, params)

    return axios.get(url, config)
      .then(response => this.onResponse(services, response))
      .catch(error => this.onError(services, error))
  }

  async update (services, url, data, params) {
    await this.beforeRequest(services)

    const config = await this.getReqConfig(services, url, params)

    return axios.patch(url, data, config)
      .then(response => this.onResponse(services, response))
      .catch(error => this.onError(services, error))
  }

  async delete (services, url, params) {
    await this.beforeRequest(services)

    const config = await this.getReqConfig(services, url, params)

    return axios.delete(url, config)
      .then(response => this.onResponse(services, response))
      .catch(error => this.onError(services, error))
  }

}
