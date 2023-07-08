export class CartesianData {
    constructor(...args) {
        this._args = args;
    }
    toTestCases() {
        var _a;
        let combinations = [];
        if (this._args.length === 0)
            return combinations;
        for (const firstParameterValue of (_a = this._args[0]) !== null && _a !== void 0 ? _a : []) {
            combinations.push([firstParameterValue]);
        }
        for (const additionalParameter of this._args.slice(1)) {
            combinations = this.addParameter(combinations, additionalParameter);
        }
        return combinations;
    }
    addParameter(combinations, parameters) {
        let result = [];
        for (const value of parameters) {
            for (const combination of combinations) {
                let lineResult = [...combination];
                lineResult.push(value);
                result.push(lineResult);
            }
        }
        return result;
    }
}
//# sourceMappingURL=cartesianData.js.map