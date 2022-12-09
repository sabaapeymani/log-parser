import { Log } from '../interface/log'
import { FormattedLog } from '../interface/formattedLog'

export class Formatter {
  private data: Log[]

  constructor(data: Log[]) {
    this.data = data
  }
  private epoch(isoStr: string): number {
    return new Date(isoStr).getTime()
  }

  private format(log: Log): FormattedLog {
    const timestamp = this.epoch(log.date)
    return { ...(delete log.date && { ...log, timestamp }) }
  }

  public handler(): FormattedLog[] {
    return this.data.map((log) => this.format(log))
  }
}
