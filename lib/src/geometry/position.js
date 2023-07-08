export class Position {
    constructor(point, planet) {
        this._planet = planet;
        this._point = planet.normalizer(point);
    }
    getPoint() {
        return this._point;
    }
    incrementLatitudeExceptObstacle() {
        return this.goToDestinationBarringObstacles(this._point.incrementLatitude());
    }
    decrementLatitudeExceptObstacle() {
        return this.goToDestinationBarringObstacles(this._point.decrementLatitude());
    }
    incrementLongitudeExpectObstacle() {
        return this.goToDestinationBarringObstacles(this._point.incrementLongitude());
    }
    decrementLongitudeExpectObstacle() {
        return this.goToDestinationBarringObstacles(this._point.decrementLongitude());
    }
    goToDestinationBarringObstacles(destinationPoint) {
        const finalPoint = this._planet.dependingOnAccessibility(this._point, () => this._point, () => destinationPoint);
        return new Position(finalPoint, this._planet);
    }
}
//# sourceMappingURL=position.js.map