import { RoverInterface } from "../rover.interface";

export interface roverCommandInterface {
  executeOn(rover: RoverInterface): RoverInterface;
}
