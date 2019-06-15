import {CRUD_ACTIONS} from './types'

export default {
  readUrlEndpoint: state => (endpoint) => {
    return state.endpoints[endpoint] || null
  },
  readEndpointState: state => (endpoint) => {
    return state.endpointsState[endpoint] || {
      [CRUD_ACTIONS.create]: null,
      [CRUD_ACTIONS.read]: null,
      [CRUD_ACTIONS.update]: null,
      [CRUD_ACTIONS.delete]: null
    }
  }
}
