import REST from '../types/types'
import {CRUD_ACTIONS} from '../types/crud-actions'
import {updateMeta} from '../utils/helpers'

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
  static deleteModel (state, { endpoint, ids = [], findFunc = findDefaultHandler, notReactive = false}) {
    let endpointData = null
    if (notReactive === true) {
      endpointData = state.notReactiveEndpoints[endpoint] || null
    } else {
      endpointData = state.endpoints[endpoint] || null
    }

    if (ids.length === 0) {
      console.warn('Pass ids, example: ids: [45, 56], endpoint: ...')
    }

    if (endpointData && endpointData.data && Array.isArray(endpointData.data)) {
      ids.forEach(id => {
        for (let i = 0; i < endpointData.data.length; i++) {
          if (findFunc(endpointData.data[i], id) === true) {
            endpointData.data.splice(i, 1)
            updateMeta(endpointData, 0, 1)
            break
          }
        }
      })
    }
  }

  static updateCache (state, { endpoint, cache = 0 }) {
    state.cache[endpoint] = +Date.now() + cache
  }

  static updateEndpoint (state, { response, insertMany = false, endpoint, action = REST.updateActions.replace, id, findFunc = findDefaultHandler, notReactive = false}) {
    const newData = response.data || {}
    let endpointData = null

    if (notReactive === true) {
      if (state.notReactiveEndpoints[endpoint]) {
        // copy values from freezed object to unfreezed
        endpointData = {
          ...state.notReactiveEndpoints[endpoint]
        }
      }
    } else {
      endpointData = state.endpoints[endpoint] || null
    }

    if (endpointData === null) {
      if (action !== REST.updateActions.replace) {
        endpointData = {data: [], _meta: {}}
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
          updateMeta(endpointData, newData.length)
        } else {
          endpointData.data.push(newData)
          updateMeta(endpointData, 1)
        }
        break
      case REST.updateActions.prepend:
        if (insertMany === true) {
          endpointData.data.unshift(...newData)
          updateMeta(endpointData, newData.length)
        } else {
          endpointData.data.unshift(newData)
          updateMeta(endpointData, 1)
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
            updateMeta(endpointData, newData.length)
          } else {
            endpointData.data.splice(insertIndex + 1, 0, newData)
            updateMeta(endpointData, 1)
          }
        }
        break
      default:
        console.warn('Unknown action: ', action)
    }

    if (notReactive === true) {
      // freeze object, freezing not deep
      // but vue ignore object and not set reactive get/set
      state.notReactiveEndpoints[endpoint] = Object.freeze(endpointData)
    } else {
      // see https://vuex.vuejs.org/guide/mutations.html#mutations-follow-vue-s-reactivity-rules
      state.endpoints = {
        ...state.endpoints,
        [endpoint]: endpointData
      }
    }
  }

  static setEndpointState (state, {type = CRUD_ACTIONS.read, loading = null, endpoint = null}) {
    if (endpoint === null) {
      return
    }

    if (!state.endpointsState[endpoint]) {
      state.endpointsState = {
        ...state.endpointsState,
        [endpoint]: {
          [CRUD_ACTIONS.create]: null,
          [CRUD_ACTIONS.read]: null,
          [CRUD_ACTIONS.update]: null,
          [CRUD_ACTIONS.delete]: null
        }
      }
    }

    state.endpointsState[endpoint][type] = loading
  }
}
