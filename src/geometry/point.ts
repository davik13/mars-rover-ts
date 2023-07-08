import { WholeNumber } from "../math/WholeNumber.js";

export class Point {
  private readonly _latitude: WholeNumber;
  private readonly _longitude: WholeNumber;

  constructor(latitude: WholeNumber, longitude: WholeNumber) {
    this._latitude = latitude;
    this._longitude = longitude;
  }

  public modulo2D(modulo: Point) {
    const latitude = this._latitude.modulo(modulo._latitude);
    const longitude = this._longitude.modulo(modulo._longitude);

    return new Point(latitude, longitude);
  }

  public incrementLatitude(): Point {
    return new Point(this._latitude.increment(), this._longitude);
  }

  public decrementLatitude(): Point {
    return new Point(this._latitude.Decrement(), this._longitude);
  }

  public incrementLongitude(): Point {
    return new Point(this._latitude, this._longitude.increment());
  }

  public decrementLongitude(): Point {
    return new Point(this._latitude, this._longitude.Decrement());
  }

  public equals(other: Point) {
    return (
      this._latitude.equals(this._latitude) &&
      other._longitude.equals(this._longitude)
    );
  }
}
