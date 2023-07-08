export class SimpleCommand {
    constructor(elementCommand) {
        if (elementCommand.length !== 1)
            throw new Error("Not a simple command");
        this._letter = elementCommand;
    }
    executeOn(rover) {
        if (this._letter === "A")
            return rover.goAhead();
        if (this._letter === "R")
            return rover.backOff();
        if (this._letter === "D")
            return rover.turnRight();
        if (this._letter === "G")
            return rover.turnLeft();
        throw new Error("Not a valid command");
    }
}
//# sourceMappingURL=SimpleCommand.js.map