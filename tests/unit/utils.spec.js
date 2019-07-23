/* global it,describe */
import { expect } from 'chai'

import {generateUUID} from '../../src/utils/helpers'

describe('utils', () => {
  it('uuid', () => {
    const val1 = generateUUID()
    const val2 = generateUUID()

    expect(val1, 'is correct uuid').to.have.lengthOf(36)

    expect(val1, 'uuid always uniq').not.to.equal(val2)
  })
})
