export default {
  authToken: (state, getters) => {
    if (getters.userData !== null) {
      return getters.userData.token
    }
    return null
  },
  readUrlEndpoint: state => (endpoint) => {
    return state.endpoints[endpoint] || null
  },
  getError: state => {
    return state._error
  }
}
