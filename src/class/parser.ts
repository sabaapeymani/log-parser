import { Log } from '../interface/log'

export class Parser {
  private data: string

  constructor(data: string) {
    this.data = data
  }

  private lines(): string[] {
    return this.data.split('\n')
  }

  private dashes(allLines: string[]): Log[] {
    return allLines.map((line) => this.parse(line))
  }

  private parse(line: string): Log {
    const [date, logLevel, data] = line.split(' - ')
    const { transactionId, err } = JSON.parse(data)
    return { date, logLevel, transactionId, err }
  }

  public handler(): Log[] {
    const allLines = this.lines()
    const logs = this.dashes(allLines)
    return logs
  }
}
