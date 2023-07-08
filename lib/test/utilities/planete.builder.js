import { Point } from "../../src/geometry/point";
import { WholeNumber } from "../../src/math/WholeNumber";
export class PlanetBuilder {
    constructor() {
        this._size = 1;
        this._obstacles = [];
    }
    withSize(size) {
        this._size = size;
        return this;
    }
    withAnObstacle(emplacement) {
        this._obstacles.push(emplacement);
        return this;
    }
    withAnObstacleAtCoordinates(latitude, longitude) {
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
        const normalizedPosition = this.normalizer(point);
        return normalizedPosition.equals(this._obstacle);
    }
    normalizer(position) {
        return this._decorated.normalizer(position);
    }
    dependingOnAccessibility(point, actionSiObstacle, actionSiLibre) {
        if (this.isAccessible(point))
            return actionSiLibre();
        return actionSiObstacle();
    }
}
//# sourceMappingURL=planete.builder.js.map