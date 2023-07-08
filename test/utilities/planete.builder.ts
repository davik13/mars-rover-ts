import { Point } from "../../src/geometry/point";
import { WholeNumber } from "../../src/math/WholeNumber";
import { Planet } from "../../src/topology/planet.interface";

export class PlanetBuilder {
  private _size: number = 1;
  private _obstacles: Point[] = [];

  public withSize(size: number): PlanetBuilder {
    this._size = size;
    return this;
  }

  public withAnObstacle(emplacement: Point): PlanetBuilder {
    this._obstacles.push(emplacement);
    return this;
  }

  public withAnObstacleAtCoordinates(
    latitude: number,
    longitude: number,
  ): PlanetBuilder {
    this._obstacles.push(
      new Point(new WholeNumber(latitude), new WholeNumber(longitude)),
    );
    return this;
  }

  public build(): Planet {
    let planet: Planet = new EmptyToroidalPlanet(new WholeNumber(this._size));
    for (const obstacle of this._obstacles) {
      planet = new ObstacleDecorator(planet, obstacle);
    }

    return planet;
  }
}

class EmptyToroidalPlanet implements Planet {
  private readonly _pointMax: Point;

  constructor(size: WholeNumber) {
    this._pointMax = new Point(size, size);
  }

  normalizer(point: Point): Point {
    return point.modulo2D(this._pointMax);
  }

  dependingOnAccessibility<T>(
    _point: Point,
    _actionIfObstacle: () => T,
    actionIfFree: () => T,
  ): T {
    return actionIfFree();
  }
}

class ObstacleDecorator implements Planet {
  private readonly _decorated: Planet;
  private readonly _obstacle: Point;

  public constructor(decorated: Planet, obstacle: Point) {
    this._decorated = decorated;
    this._obstacle = obstacle;
  }

  private isAccessible(point: Point): boolean {
    const normalizedPosition = this.normalizer(point);
    return normalizedPosition.equals(this._obstacle);
  }

  public normalizer(position: Point): Point {
    return this._decorated.normalizer(position);
  }

  public dependingOnAccessibility<T>(
    point: Point,
    actionSiObstacle: () => T,
    actionSiLibre: () => T,
  ): T {
    if (this.isAccessible(point)) return actionSiLibre();
    return actionSiObstacle();
  }
}
