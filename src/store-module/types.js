export default {
  actions: {
    updateUrlEndpoint: 'rest/updateUrlEndpoint',
    createModel: 'rest/createModel',
    updateModel: 'rest/updateModel',
    deleteModel: 'rest/deleteModel'
  },
  getters: {
    readUrlEndpoint: 'rest/readUrlEndpoint',
    readEndpointState: 'rest/readEndpointState'
  },
  mutations: {
    updateEndpoint: 'rest/updateEndpoint'
  },
  updateActions: {
    append: 'append',
    prepend: 'prepend',
    replaceSame: 'replaceSame',
    replace: 'replace',
    insertAfter: 'insertAfter'
  }
}

export const CRUD_ACTIONS = {
  create: 'create',
  read: 'read',
  update: 'update',
  delete: 'delete'
}
