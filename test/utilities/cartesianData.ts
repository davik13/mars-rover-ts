export class CartesianData {
  private readonly _args: any[][];

  public constructor(...args: any[][]) {
    this._args = args;
  }

  public toTestCases(): any[][] {
    let combinations: any[][] = [];

    for (const firstParameterValue of this._args[0]) {
      combinations.push([firstParameterValue]);
    }

    for (const additionalParameter of this._args.slice(1))
      combinations = this.addParameter(combinations, additionalParameter);

    return combinations;
  }

  private addParameter(combinations: any[][], parameters: any[]): any[][] {
    let result: any[][] = [];

    for (const value of parameters) {
      for (const combination of combinations) {
        let lineResult = [];

        for (const element of combination) {
          lineResult.push(element);
        }

        lineResult.push(value);
        result.push(lineResult);
      }
    }

    return result;
  }
}
