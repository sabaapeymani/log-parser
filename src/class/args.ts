export class Args {
  private args: string[]

  constructor(args: string[]) {
    this.args = args
  }

  public input(): string {
    try {
      const index = this.args.findIndex((a) => a === '--input', 0)
      if (index > -1 && this.args[index + 1]) {
        return this.args[index + 1]
      }
      throw new Error('invalid input file path')
    } catch (error) {
      throw error
    }
  }

  public output(): string {
    try {
      const index = this.args.findIndex((a) => a === '--output', 0)
      if (index > -1 && this.args[index + 1]) {
        return this.args[index + 1]
      }
      throw new Error('invalid output file path')
    } catch (error) {
      throw error
    }
  }
}
