import { Planet } from "../../src/topology/planet.interface";
import { Point } from "../../src/geometry/point";

export class InfiniteEmptyPlanet implements Planet {
  normalizer(point: Point): Point {
    return point;
  }

  dependingOnAccessibility<T>(
    _point: Point,
    _actionIfObstacle: () => T,
    actionIfFree: () => T,
  ): T {
    return actionIfFree();
  }
}
