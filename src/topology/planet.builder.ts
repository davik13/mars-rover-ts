import { Point } from "../geometry/point";
import { WholeNumber } from "../math/WholeNumber";
import { Planet } from "./planet.interface";

export class PlanetBuilder {
  private _size: number = 1;
  private _obstacles: Point[] = [];

  public withSize(size: number): PlanetBuilder {
    this._size = size;
    return this;
  }

  public haveAnObstacle(location: Point): PlanetBuilder {
    this._obstacles.push(location);
    return this;
  }

  public haveAnObstacleAtCoordinates(
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

  constructor(decorated: Planet, obstacle: Point) {
    this._decorated = decorated;
    this._obstacle = obstacle;
  }

  private isAccessible(point: Point): boolean {
    const normalizePosition = this.normalizer(point);
    return normalizePosition.equals(this._obstacle);
  }

  normalizer(position: Point): Point {
    return this._decorated.normalizer(position);
  }

  dependingOnAccessibility<T>(
    point: Point,
    actionIfObstacle: () => T,
    actionIfFree: () => T,
  ): T {
    if (this.isAccessible(point)) {
      return actionIfFree();
    }
    return actionIfObstacle();
  }
}
