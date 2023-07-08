import { roverCommandInterface } from "./roverCommand.interface";
import { RoverInterface } from "../rover.interface";

export class SimpleCommand implements roverCommandInterface {
  private readonly _letter: string;

  constructor(elementCommand: string) {
    if (elementCommand.length !== 1) throw new Error("Not a simple command");

    this._letter = elementCommand;
  }

  executeOn(rover: RoverInterface): RoverInterface {
    if (this._letter === "A") return rover.goAhead();
    if (this._letter === "R") return rover.backOff();
    if (this._letter === "D") return rover.turnRight();
    if (this._letter === "G") return rover.turnLeft();
    throw new Error("Not a valid command");
  }
}
