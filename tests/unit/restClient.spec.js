/* global it,describe */
import { expect } from 'chai'

import {DefaultRestClient} from '../../src/index'

describe('restClient', () => {
  it('error in beforeRequest', async () => {
    class TestClient extends DefaultRestClient {
      constructor() {
        super()
        this.errors = []
      }

      async beforeRequest() {
        throw new Error('Test')
      }

      async onError(services, error) {
        this.errors.push(error)
        return Promise.reject(error)
      }
    }

    const client = new TestClient()
    let error = null
    try {
      await client.read({}, 'sdfsdf')
    } catch (e) {
      error = e
    }

    expect(error.message).to.include('Test')
    expect(client.errors).to.have.lengthOf(1)

  })
})
