import axios from 'axios/dist/axios'

export default class {

  /**
   * @param {services} services
   * @returns {Promise<void>}
   */
  async beforeRequest (services) {}

  /**
   * @param {services} services
   * @param {string} url
   * @param {Object|axios.config} params - see {@link https://github.com/axios/axios#request-config}
   * @returns {Promise<axios.config|Object>}
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
   * @param {axios.error} error
   * @returns {Promise<never>}
   */
  async onError (services, error) {
    return Promise.reject(error.response)
  }

  async create (services, url, data, params) {
    await this.beforeRequest(services)

    const config = await this.getReqConfig(services, url, params)

    return axios.post(url, data, config)
      .catch(error => this.onError(services, error))
  }

  async read (services, url, params) {
    await this.beforeRequest(services)

    const config = await this.getReqConfig(services, url, params)

    return axios.get(url, config)
      .catch(error => this.onError(services, error))
  }

  async update (services, url, data, params) {
    await this.beforeRequest(services)

    const config = await this.getReqConfig(services, url, params)

    return axios.patch(url, config)
      .catch(error => this.onError(services, error))
  }

  async delete (services, url, params) {
    await this.beforeRequest(services)

    const config = await this.getReqConfig(services, url, params)

    return axios.delete(url, config)
      .catch(error => this.onError(services, error))
  }

}
