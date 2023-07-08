export class RoverWithState {
    constructor(orientation, position) {
        this.Orientation = orientation;
        this.Position = position;
    }
    turnRight() {
        return new RoverWithState(this.Orientation.clockwiseRotation(), this.Position);
    }
    turnLeft() {
        return new RoverWithState(this.Orientation.antiClockwiseRotation(), this.Position);
    }
    goAhead() {
        return new RoverWithState(this.Orientation, this.Orientation.goAhead(this.Position));
    }
    backOff() {
        return new RoverWithState(this.Orientation, this.Orientation.backoff(this.Position));
    }
}
//# sourceMappingURL=roverWithState.js.map