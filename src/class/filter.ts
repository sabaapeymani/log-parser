import { Log } from '../interface/log'

export class Filter {
  private data: Log[]

  constructor(data: Log[]) {
    this.data = data
  }

  public get(logLevel: string): Log[] {
    return this.data.filter((log) => log.logLevel === logLevel)
  }
}