/* global it,describe */
import { expect } from 'chai'

import {Uuid} from '../../src/utils/Uuid'

describe('utils', () => {
  it('uuid', () => {
    const val1 = Uuid.generate()
    const val2 = Uuid.generate()

    expect(val1, 'is correct uuid').to.have.lengthOf(36)

    expect(val1, 'uuid always uniq').not.to.equal(val2)
  })
})
