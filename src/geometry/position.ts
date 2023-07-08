import { Planet } from "../topology/planet.interface";
import { Point } from "./point";

export class Position {
  private readonly _point: Point;
  private readonly _planet: Planet;

  constructor(point: Point, planet: Planet) {
    this._planet = planet;
    this._point = planet.normalizer(point);
  }

  getPoint(): Point {
    return this._point;
  }

  incrementLatitudeExceptObstacle(): Position {
    return this.goToDestinationBarringObstacles(
      this._point.incrementLatitude(),
    );
  }

  decrementLatitudeExceptObstacle(): Position {
    return this.goToDestinationBarringObstacles(
      this._point.decrementLatitude(),
    );
  }

  incrementLongitudeExpectObstacle(): Position {
    return this.goToDestinationBarringObstacles(
      this._point.incrementLongitude(),
    );
  }

  decrementLongitudeExpectObstacle(): Position {
    return this.goToDestinationBarringObstacles(
      this._point.decrementLongitude(),
    );
  }

  private goToDestinationBarringObstacles(destinationPoint: Point): Position {
    const finalPoint = this._planet.dependingOnAccessibility(
      this._point,
      () => this._point,
      () => destinationPoint,
    );

    return new Position(finalPoint, this._planet);
  }
}
