class OrientationNorth {
    constructor() { }
    goAhead(position) {
        return position.incrementLatitudeExceptObstacle();
    }
    backoff(position) {
        return position.decrementLatitudeExceptObstacle();
    }
    antiClockwiseRotation() {
        return Orientations.West;
    }
    clockwiseRotation() {
        return Orientations.East;
    }
    toString() {
        return "North";
    }
}
OrientationNorth.Instance = new OrientationNorth();
class OrientationSouth {
    constructor() { }
    goAhead(position) {
        return position.decrementLatitudeExceptObstacle();
    }
    backoff(position) {
        return position.incrementLatitudeExceptObstacle();
    }
    antiClockwiseRotation() {
        return Orientations.East;
    }
    clockwiseRotation() {
        return Orientations.West;
    }
    toString() {
        return "South";
    }
}
OrientationSouth.Instance = new OrientationSouth();
class OrientationEast {
    constructor() { }
    goAhead(position) {
        return position.incrementLongitudeExpectObstacle();
    }
    backoff(position) {
        return position.decrementLongitudeExpectObstacle();
    }
    antiClockwiseRotation() {
        return Orientations.North;
    }
    clockwiseRotation() {
        return Orientations.South;
    }
    toString() {
        return "East";
    }
}
OrientationEast.Instance = new OrientationEast();
class OrientationWest {
    constructor() { }
    goAhead(position) {
        return position.decrementLongitudeExpectObstacle();
    }
    backoff(position) {
        return position.incrementLongitudeExpectObstacle();
    }
    antiClockwiseRotation() {
        return Orientations.South;
    }
    clockwiseRotation() {
        return Orientations.North;
    }
    toString() {
        return "West";
    }
}
OrientationWest.Instance = new OrientationWest();
export class Orientations {
}
Orientations.North = OrientationNorth.Instance;
Orientations.South = OrientationSouth.Instance;
Orientations.East = OrientationEast.Instance;
Orientations.West = OrientationWest.Instance;
//# sourceMappingURL=orientation.js.map