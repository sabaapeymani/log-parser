// import assert = require('assert')
import { strict as assert } from 'assert'
import { Inputter } from './inputter'

describe('Class Inputter', () => {
  describe('read()', () => {
    it('should return error when there is not input file', () => {
      const inputter = new Inputter('./apps.log')
      assert.throws(inputter.read, Error)
    })
    it('should return string', () => {
      const inputter = new Inputter('./app.log')
      const data = inputter.read()
      assert.notEqual(data.length, 0)
    })
  })
})
