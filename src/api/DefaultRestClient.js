import axios from 'axios/dist/axios'

export default class {

  async beforeRequest () {}

  async getReqConfig (services, url, params) {
    let options = {}
    if (services.store.getters.authToken) {
      options.headers = {
        'Authorization': 'Bearer  ' + services.store.getters.authToken
      }
    }
    if (params) {
      options = {
        ...options,
        ...params
      }
    }
    return options
  }

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
