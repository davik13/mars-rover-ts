export class RoverInterpreter {
    constructor(pilotedRover) {
        this._rover = pilotedRover;
    }
    Interpreter(command) {
        return new RoverInterpreter(command.executeOn(this._rover));
    }
    goAhead() {
        return this._rover.goAhead();
    }
    backOff() {
        return this._rover.backOff();
    }
    turnRight() {
        return this._rover.turnRight();
    }
    turnLeft() {
        return this._rover.turnLeft();
    }
}
//# sourceMappingURL=roverInterpreter.js.map