import { Point } from "../geometry/point";
import { WholeNumber } from "../math/WholeNumber";
export class PlanetBuilder {
    constructor() {
        this._size = 1;
        this._obstacles = [];
    }
    withSize(size) {
        this._size = size;
        return this;
    }
    haveAnObstacle(location) {
        this._obstacles.push(location);
        return this;
    }
    haveAnObstacleAtCoordinates(latitude, longitude) {
        this._obstacles.push(new Point(new WholeNumber(latitude), new WholeNumber(longitude)));
        return this;
    }
    build() {
        let planet = new EmptyToroidalPlanet(new WholeNumber(this._size));
        for (const obstacle of this._obstacles) {
            planet = new ObstacleDecorator(planet, obstacle);
        }
        return planet;
    }
}
class EmptyToroidalPlanet {
    constructor(size) {
        this._pointMax = new Point(size, size);
    }
    normalizer(point) {
        return point.modulo2D(this._pointMax);
    }
    dependingOnAccessibility(_point, _actionIfObstacle, actionIfFree) {
        return actionIfFree();
    }
}
class ObstacleDecorator {
    constructor(decorated, obstacle) {
        this._decorated = decorated;
        this._obstacle = obstacle;
    }
    isAccessible(point) {
        const normalizePosition = this.normalizer(point);
        return normalizePosition.equals(this._obstacle);
    }
    normalizer(position) {
        return this._decorated.normalizer(position);
    }
    dependingOnAccessibility(point, actionIfObstacle, actionIfFree) {
        if (this.isAccessible(point)) {
            return actionIfFree();
        }
        return actionIfObstacle();
    }
}
//# sourceMappingURL=planet.builder.js.map