import axios from 'axios'

const STATUS_PENDING = 1
const STATUS_COMPLETED = 2
const queuePromises = {}

export default class api {
  static options(token, params, store) {
    let options = {}
    if (token) {
      options.headers = {
        'Authorization': 'Bearer  ' + token
      }
    }
    if (params) {
      options = {
        ...options,
        ...params
      }
    }
    options.store = store
    return options
  }

  static get(token, url, options = {}, store) {
    let task = queuePromises[url] || {url}
    if (task.status === STATUS_PENDING) {
      task.counter = task.counter + 1
      console.warn('Double get data check that', task)
      return task.promise
    }
    queuePromises[url] = task
    task.status = STATUS_PENDING
    task.counter = 1
    task.promise = new Promise((resolve, reject) => {
      axios.get(url, api.options(token, options, store)).then(r => {
        task.status = STATUS_COMPLETED
        resolve(r)
      }).catch(e => {
        reject(e)
      })
    })
    return task.promise
  }

  static save(token, url, data, options = {}, store) {
    return axios.post(url, data, api.options(token, options, store))
  }

  static update(token, url, data, options = {}, store) {
    return axios.patch(url, data, api.options(token, options, store))
  }

  static delete(token, url, options = {}, store) {
    return axios.delete(url, api.options(token, options, store))
  }
}
