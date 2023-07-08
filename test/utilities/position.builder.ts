import { Position } from "../../src/geometry/position";
import { InfiniteEmptyPlanet } from "./infiniteEmptyPlanet";
import { Point } from "../../src/geometry/point";
import { Planet } from "../../src/topology/planet.interface";
import { WholeNumber } from "../../src/math/WholeNumber";

export class PositionBuilder {
  static origin(): Position {
    return new PositionBuilder().build();
  }

  private _latitude: WholeNumber = WholeNumber.Zero;
  private _longitude: WholeNumber = WholeNumber.Zero;
  private _planet: Planet = new InfiniteEmptyPlanet();

  public haveForCoordinates(
    latitude: number,
    longitude: number,
  ): PositionBuilder {
    this._latitude = new WholeNumber(latitude);
    this._longitude = new WholeNumber(longitude);
    return this;
  }

  build(): Position {
    return new Position(
      new Point(this._latitude, this._longitude),
      this._planet,
    );
  }

  origin() {
    return this.haveForCoordinates(0, 0);
  }

  onPlanet(planet: Planet) {
    this._planet = planet;
    return this;
  }
}
