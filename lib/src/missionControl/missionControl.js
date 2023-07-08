export class MissionControl {
    constructor(planet, roverInterpreter, roverWithState) {
        this._planet = planet;
        this._roverInterpreter = roverInterpreter;
        this._roverWithState = roverWithState;
    }
    moveCoordinates(command) {
        const newPosition = this._roverWithState.Position;
        if (this.hasObstacleOnPath(newPosition)) {
            this._roverInterpreter.Interpreter(command);
        }
    }
    hasObstacleOnPath(position) {
        const point = position.getPoint();
        return this._planet.dependingOnAccessibility(point, () => true, () => false);
    }
}
//# sourceMappingURL=missionControl.js.map