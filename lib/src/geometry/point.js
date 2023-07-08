export class Point {
    constructor(latitude, longitude) {
        this._latitude = latitude;
        this._longitude = longitude;
    }
    modulo2D(modulo) {
        const latitude = this._latitude.modulo(modulo._latitude);
        const longitude = this._longitude.modulo(modulo._longitude);
        return new Point(latitude, longitude);
    }
    incrementLatitude() {
        return new Point(this._latitude.increment(), this._longitude);
    }
    decrementLatitude() {
        return new Point(this._latitude.Decrement(), this._longitude);
    }
    incrementLongitude() {
        return new Point(this._latitude, this._longitude.increment());
    }
    decrementLongitude() {
        return new Point(this._latitude, this._longitude.Decrement());
    }
    equals(other) {
        return (this._latitude.equals(this._latitude) &&
            other._longitude.equals(this._longitude));
    }
}
//# sourceMappingURL=point.js.map