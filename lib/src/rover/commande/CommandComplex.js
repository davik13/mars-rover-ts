import { SimpleCommand } from "./SimpleCommand";
import { CommandEmpty } from "./CommandEmpty";
export class CommandComplex {
    constructor(command) {
        this._next = new CommandEmpty();
        this._firstCommand = new SimpleCommand(command);
        const remains = command.slice(1);
        if (remains.length > 0)
            this._next = new CommandComplex(remains);
    }
    executeOn(rover) {
        rover = this._firstCommand.executeOn(rover);
        return this._next.executeOn(rover);
    }
}
//# sourceMappingURL=CommandComplex.js.map