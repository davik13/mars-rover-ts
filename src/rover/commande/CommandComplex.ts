import { roverCommandInterface } from "./roverCommand.interface";
import { SimpleCommand } from "./SimpleCommand";
import { RoverInterface } from "../rover.interface";
import { CommandEmpty } from "./CommandEmpty";

export class CommandComplex implements roverCommandInterface {
  private readonly _firstCommand: SimpleCommand;
  private readonly _next: roverCommandInterface = new CommandEmpty();

  public constructor(command: string) {
    this._firstCommand = new SimpleCommand(command);

    const remains = command.slice(1);
    if (remains.length > 0) this._next = new CommandComplex(remains);
  }

  public executeOn(rover: RoverInterface) {
    rover = this._firstCommand.executeOn(rover);
    return this._next.executeOn(rover);
  }
}
