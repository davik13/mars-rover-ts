export class WholeNumber {
    constructor(value) {
        if (Math.round(value) !== value)
            throw new Error("Not an integer");
        this._value = WholeNumber.RestoreZeroNegative(value);
    }
    Decrement() {
        return new WholeNumber(this._value - 1);
    }
    static RestoreZeroNegative(number) {
        if (number == -0)
            return 0;
        return number;
    }
    increment() {
        return new WholeNumber(this._value + 1);
    }
    modulo(other) {
        const otherValue = other._value;
        const valueReducedSigned = (this._value % otherValue) % -otherValue;
        const unsignedValue = valueReducedSigned + otherValue;
        const unsignedReducedValue = unsignedValue % otherValue;
        return new WholeNumber(unsignedReducedValue);
    }
    equals(other) {
        return this._value === other._value;
    }
}
WholeNumber.Zero = new WholeNumber(0);
//# sourceMappingURL=WholeNumber.js.map