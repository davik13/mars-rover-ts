import { Point } from "../geometry/point";

export interface Planet {
  normalizer(position: Point): Point;

  dependingOnAccessibility<T>(
    point: Point,
    actionIfObstacle: () => T,
    actionSiFree: () => T,
  ): T;
}
