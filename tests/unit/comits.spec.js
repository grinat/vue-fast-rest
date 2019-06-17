/* global it,describe */
import { expect } from 'chai'

import {getInitedInstances} from './helper'
import {REST} from '../../src/index'

describe('commits', () => {
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
})
