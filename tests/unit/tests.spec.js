/* global it,describe */
import { expect } from 'chai'
import {shallowMount} from '@vue/test-utils'

import {URLS} from './fixtures'
import {getInitedInstances} from './helper'
import {REST} from '../../src/index'

describe('vue-fast-rest', () => {
  it('check commits', async () => {
    const {store} = getInitedInstances()

    // set one model
    store.commit(REST.mutations.updateEndpoint, {
      response: {
        data: {
          title: 'Foo'
        }
      },
      endpoint: 'foo'
    })
    const item = store.getters[REST.getters.readUrlEndpoint]('foo')
    expect(item).to.include({ title: 'Foo' })

    // set many model
    store.commit(REST.mutations.updateEndpoint, {
      response: {
        data: {
          data: [
            {title: 'Foo', id: 1},
            {title: 'Bar', id: 2}
          ]
        }
      },
      endpoint: 'items'
    })
    const items = store.getters[REST.getters.readUrlEndpoint]('items')
    expect(items).to.have.nested.property('data[0].title','Foo')
    expect(items).to.have.nested.property('data[1].title','Bar')

    // set model to top
    store.commit(REST.mutations.updateEndpoint, {
      action: REST.updateActions.prepend,
      response: {
        data: {title: 'Zoo', id: 777},
      },
      endpoint: 'items'
    })
    expect(items).to.have.nested.property('data[0].title','Zoo')

    // set model after
    store.commit(REST.mutations.updateEndpoint, {
      action: REST.updateActions.insertAfter,
      id: 777,
      response: {
        data: {title: 'Boo', id: 888},
      },
      endpoint: 'items'
    })
    expect(items).to.have.nested.property('data[1].title','Boo')

    // replace model
    store.commit(REST.mutations.updateEndpoint, {
      action: REST.updateActions.replaceSame,
      id: 888,
      response: {
        data: {title: 'Bazzz', id: 888},
      },
      endpoint: 'items'
    })
    expect(items).to.have.nested.property('data[1].title','Bazzz')

  })

  it('check create/read/update/remove by dispatchers in vue component', async () => {
    const {localVue, store} = getInitedInstances()

    const wrapper = shallowMount({
      template: '<div>{{items}}</div>',
      computed: {
        items () {
          return this.$store.getters[REST.getters.readUrlEndpoint](
            URLS.books
          )
        }
      },
      methods: {
        createItemInEndpoint (title) {
          return this.$store.dispatch(REST.actions.createModel, {
            url: URLS.createBook,
            endpoint: URLS.books,
            data: { title }
          })
        },
        createItemWithoutEndpoint (title) {
          return this.$store.dispatch(REST.actions.createModel, {
            url: URLS.createBook,
            data: { title }
          })
        },
        removeItemFromEndpoint (id) {
          return this.$store.dispatch(REST.actions.deleteModel, {
            url: URLS.removeBook,
            endpoint: URLS.books,
            ids: [id]
          })
        },
        updateItemInEndpoint (id, title) {
          return this.$store.dispatch(REST.actions.updateModel, {
            url: URLS.updateBook,
            endpoint: URLS.books,
            id,
            data: { title }
          })
        },
        fetch () {
          return this.$store.dispatch(REST.actions.updateUrlEndpoint, {
            endpoint: URLS.books
          })
        }
      }
    }, {
      localVue,
      store
    })

    // read data form server
    await wrapper.vm.fetch()
    expect(wrapper.vm.items,'server return data').to.have.nested.property('data[0].title')
    expect(wrapper.text()).to.include('title')

    // create item on server and dont put in endpoint
    const title = 'Foo abr'
    await wrapper.vm.createItemWithoutEndpoint()
    wrapper.vm.items.data.forEach(obj => {
      expect(obj, `created item must not inserted into books endpoint`).to.not.include({title: title})
    })

    // create item on server and put to endpoint
    const titleOnServer = 'Bar bar to server bar'
    await wrapper.vm.createItemInEndpoint(titleOnServer)
    const lastIndex = wrapper.vm.items.data.length - 1
    expect(wrapper.vm.items, 'created item must be at end').to.have.nested.property(`data[${lastIndex}].title`, titleOnServer)
    expect(wrapper.vm.items, 'created item must be at end').to.have.nested.property(`data[${lastIndex}].copyright`)
    expect(wrapper.text(), 'template updated with new data').to.include(titleOnServer)

    // remove item in endpoint
    const { id: removeId, title: removeTitle} = wrapper.vm.items.data[0]
    expect(wrapper.text()).to.include(removeTitle)
    await wrapper.vm.removeItemFromEndpoint(removeId)
    wrapper.vm.items.data.forEach(obj => {
      expect(obj, `removed item must not in data`).to.not.include({id: removeId})
    })
    expect(wrapper.text()).not.to.include(removeTitle)

    // update item in endpoint
    const updId = wrapper.vm.items.data[0].id
    const updTitle = 'Jsdns ew wqjqwe'
    await wrapper.vm.updateItemInEndpoint(updId, updTitle)
    expect(wrapper.vm.items.data[0]).to.include({ title: updTitle })
    expect(wrapper.text()).to.include(updTitle)
  })
})
