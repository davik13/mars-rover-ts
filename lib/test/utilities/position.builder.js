import { Position } from "../../src/geometry/position";
import { InfiniteEmptyPlanet } from "./infiniteEmptyPlanet";
import { Point } from "../../src/geometry/point";
import { WholeNumber } from "../../src/math/WholeNumber";
export class PositionBuilder {
    constructor() {
        this._latitude = WholeNumber.Zero;
        this._longitude = WholeNumber.Zero;
        this._planet = new InfiniteEmptyPlanet();
    }
    static origin() {
        return new PositionBuilder().build();
    }
    haveForCoordinates(latitude, longitude) {
        this._latitude = new WholeNumber(latitude);
        this._longitude = new WholeNumber(longitude);
        return this;
    }
    build() {
        return new Position(new Point(this._latitude, this._longitude), this._planet);
    }
    origin() {
        return this.haveForCoordinates(0, 0);
    }
    onPlanet(planet) {
        this._planet = planet;
        return this;
    }
}
//# sourceMappingURL=position.builder.js.map