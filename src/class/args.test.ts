// import assert = require('assert')
import { strict as assert } from 'assert'
import { Args } from './args'

describe('Class Args', () => {
  describe('input()', () => {
    it('should return error when there is not input args', () => {
      const processString = 'node ./dist/parser.js output-- ./errors.json'
      const processArgs = processString.split(' ')
      const args = new Args(processArgs)
      assert.throws(args.input, Error)
    })
    it('should return input file path', () => {
      const processString =
        'node ./dist/parser.js --input ./app.log --output ./errors.json'
      const processArgs = processString.split(' ')
      const args = new Args(processArgs)
      const input = args.input()
      assert.equal(input, './app.log')
    })
    it('should return error when there is not input path', () => {
      const processString =
        'node ./dist/parser.js output-- ./errors.json --input'
      const processArgs = processString.split(' ')
      const args = new Args(processArgs)
      assert.throws(args.input, Error)
    })
  })
  describe('output()', () => {
    it('should return error when there is not output args', () => {
      const processString = 'node ./dist/parser.js --input ./app.log'
      const processArgs = processString.split(' ')
      const args = new Args(processArgs)
      assert.throws(args.output, Error)
    })
    it('should return output file path', () => {
      const processString =
        'node ./dist/parser.js --input ./app.log --output ./errors.json'
      const processArgs = processString.split(' ')
      const args = new Args(processArgs)
      const input = args.output()
      assert.equal(input, './errors.json')
    })
    it('should return error when there is not input path', () => {
      const processString = 'node ./dist/parser.js --input ./app.log --output'
      const processArgs = processString.split(' ')
      const args = new Args(processArgs)
      assert.throws(args.output, Error)
    })
  })
})
