export const USER_DATA = 'USER_DATA'

const savedData = {
  user: null
}

if (typeof window !== "undefined") {
  savedData.user = localStorage.getItem(USER_DATA) ? JSON.parse(localStorage.getItem(USER_DATA)) : null
}

export default {
  _userData: savedData.user,
  endpoints: {},
  cache: {}
}
