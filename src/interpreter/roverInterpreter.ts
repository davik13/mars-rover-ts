import { RoverWithState } from "../rover/roverWithState";
import { RoverInterface } from "../rover/rover.interface";
import { roverCommandInterface } from "../rover/command/roverCommand.interface";

export class RoverInterpreter implements RoverInterface {
  private readonly _rover: RoverInterface;

  public constructor(pilotedRover: RoverInterface) {
    this._rover = pilotedRover;
  }

  public Interpreter(command: roverCommandInterface): RoverInterpreter {
    return new RoverInterpreter(command.executeOn(this._rover));
  }

  public goAhead(): RoverWithState {
    return this._rover.goAhead();
  }

  public backOff(): RoverWithState {
    return this._rover.backOff();
  }

  public turnRight(): RoverWithState {
    return this._rover.turnRight();
  }

  public turnLeft(): RoverWithState {
    return this._rover.turnLeft();
  }
}
