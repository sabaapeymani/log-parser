import { readFileSync } from 'fs'

export class Inputter {
  private filePath: string

  constructor(filePath: string) {
    this.filePath = filePath
  }

  public read(): string {
    return readFileSync(this.filePath).toString()
  }
}
