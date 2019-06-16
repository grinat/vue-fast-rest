import REST from '../types/types'
import {CRUD_ACTIONS} from '../types/crud-actions'

const findDefaultHandler = (v, id) => {
  if (v && v.hasOwnProperty('id')) {
    return v.id === id
  } else if (v && v.hasOwnProperty('_storeUUID')) {
    return v._storeUUID === id
  }
  return false
}

/**
 * @private
 */
export default class mutations {
  static deleteModel (state, { endpoint, ids = [], findFunc = findDefaultHandler}) {
    let endpointData = state.endpoints[endpoint] || null

    if (ids.length === 0) {
      console.warn('Pass ids, example: ids: [45, 56], endpoint: ...')
    }

    if (endpointData && endpointData.data && Array.isArray(endpointData.data)) {
      ids.forEach(id => {
        for (let i = 0; i < endpointData.data.length; i++) {
          if (findFunc(endpointData.data[i], id) === true) {
            endpointData.data.splice(i, 1)
            break
          }
        }
      })
    }
  }

  static updateCache (state, { endpoint, cache = 0 }) {
    state.cache[endpoint] = +Date.now() + cache
  }

  static updateEndpoint (state, { response, insertMany = false, endpoint, action = REST.updateActions.replace, id, findFunc = findDefaultHandler }) {
    const newData = response.data || {}
    let endpointData = state.endpoints[endpoint] || null

    if (endpointData === newData) {
      if (action !== REST.updateActions.replace) {
        endpointData = {data: []}
      } else {
        endpointData = {}
      }
    }

    let replaceIndex = -1
    let insertIndex = -1
    switch (action) {
      case REST.updateActions.append:
        if (insertMany === true) {
          endpointData.data.push(...newData)
        } else {
          endpointData.data.push(newData)
        }
        break
      case REST.updateActions.prepend:
        if (insertMany === true) {
          endpointData.data.unshift(...newData)
        } else {
          endpointData.data.unshift(newData)
        }
        break
      case REST.updateActions.replaceSame:
        if (!id) {
          console.warn('Unknown id in ', action)
        }
        replaceIndex = endpointData.data.findIndex(v => findFunc(v, id))
        if (replaceIndex > -1) {
          endpointData.data[replaceIndex] = newData
        }
        break
      case REST.updateActions.replace:
        endpointData = newData
        break
      case REST.updateActions.insertAfter:
        if (!id) {
          console.warn('Unknown id in ', action)
        }
        insertIndex = endpointData.data.findIndex(v => findFunc(v, id))
        if (insertIndex > -1) {
          if (insertMany === true) {
            endpointData.data.splice(insertIndex + 1, 0, ...newData)
          } else {
            endpointData.data.splice(insertIndex + 1, 0, newData)
          }
        }
        break
      default:
        console.warn('Unknown action: ', action)
    }

    state.endpoints[endpoint] = endpointData

    // connect reactive to all properties
    state.endpoints = Object.assign({}, state.endpoints)
  }

  static setEndpointState (state, {type = CRUD_ACTIONS.read, loading = null, endpoint = null}) {
    if (endpoint === null) {
      return
    }

    if (!state.endpointsState[endpoint]) {
      state.endpointsState[endpoint] = {
        [CRUD_ACTIONS.create]: null,
        [CRUD_ACTIONS.read]: null,
        [CRUD_ACTIONS.update]: null,
        [CRUD_ACTIONS.delete]: null
      }
    }
    state.endpointsState[endpoint][type] = loading

    // connect reactive to all properties
    state.endpointsState = Object.assign({}, state.endpointsState)
  }
}
