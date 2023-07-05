import { PossèdeObstacles } from "../../src/topology/possedeObstacles.interface";
import { Point } from "../../src/geometry/point";

export class SansObstacles implements PossèdeObstacles {
  SelonAccessibilité<T>(
    _: Point,
    actionSiObstacle: () => T,
    actionSiLibre: () => T
  ): T {
    return actionSiLibre();
  }
}
