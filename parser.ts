import { Args } from './src/class/args'
import { Inputter } from './src/class/inputter'
import { Parser } from './src/class/parser'
import { Filter } from './src/class/filter'
import { Formatter } from './src/class/formatter'
import { Outputter } from './src/class/outputter'

try {
  const args = new Args(process.argv)
  const inputFile = args.input()
  const outputFile = args.output()

  const inputter = new Inputter(inputFile)
  const fileContent = inputter.read()

  const parser = new Parser(fileContent)
  const lines = parser.handler()

  const filter = new Filter(lines)
  const errors = filter.get('error')

  const formatter = new Formatter(errors)
  const data = formatter.handler()

  const outputter = new Outputter(data)
  outputter.jsonFile(outputFile)
  console.log('DONE!')
} catch (error) {
  console.error(error.message)
}
