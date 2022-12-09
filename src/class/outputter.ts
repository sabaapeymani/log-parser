import { writeFileSync } from 'fs'
import { FormattedLog } from '../interface/formattedLog'

export class Outputter {
  private data: FormattedLog[]

  constructor(data: FormattedLog[]) {
    this.data = data
  }

  public jsonFile(outputFile: string) {
    writeFileSync(outputFile, JSON.stringify(this.data))
  }
}
