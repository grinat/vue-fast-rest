/**
 *
 * Recalc meta in data
 *
 * @param endpointData
 * @param added
 * @param removed
 */
export function updateMeta(endpointData, added = 0, removed = 0) {
  if (!endpointData._meta && endpointData.data) {
    endpointData._meta = {
      totalCount: endpointData.data.length,
      pageCount: 1,
      currentPage: 1,
      perPage: endpointData.data.length * 2
    }
  }
  if (endpointData._meta) {
    if (added > 0) {
      endpointData._meta.totalCount = +endpointData._meta.totalCount + added
    }
    if (removed > 0) {
      endpointData._meta.totalCount = +endpointData._meta.totalCount - removed
    }
    endpointData._meta.pageCount = Math.ceil(endpointData._meta.totalCount / endpointData._meta.perPage)
    if (endpointData._meta.currentPage > endpointData._meta.pageCount) {
      endpointData._meta.currentPage = +endpointData._meta.pageCount
    }
    if (endpointData._meta.currentPage <= 0) {
      endpointData._meta.currentPage = 1
    }
  }
}


/**
 * @returns {string} - v4 uuid
 */
export function generateUUID() {
  let d = +new Date()
  if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
    d += performance.now() // use high-precision timer if available
  }
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    let r = (d + Math.random() * 16) % 16 | 0
    d = Math.floor(d / 16)
    return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16)
  })
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData)
}

/**
 *
 * Get data and return correct axios response format
 * with convert FormData in json
 *
 * @param data
 * @returns {{data: {_storeUUID: (string)}}}
 */
export function createOfflineResponse(data) {
  const model = isFormData(data) ? formDataToJson(data) : data
  return {
    data: {
      ...model,
      _storeUUID: data._storeUUID || generateUUID()
    }
  }
}

/**
 *
 * Convert FormData to JSON
 *
 * @param {FormData} fd
 * @returns {string}
 */
export function formDataToJson(fd) {
  return Array.from(fd).reduce((obj, [k, v]) => ({...obj, [k]: v}), {})
}
