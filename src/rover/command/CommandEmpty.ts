import { roverCommandInterface } from "./roverCommand.interface";
import { RoverInterface } from "../rover.interface";

export class CommandEmpty implements roverCommandInterface {
  executeOn(rover: RoverInterface): RoverInterface {
    return rover;
  }
}
