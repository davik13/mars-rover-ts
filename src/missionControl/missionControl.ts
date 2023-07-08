import { Planet } from "../topology/planet.interface";
import { RoverInterpreter } from "../interpreter/roverInterpreter";
import { RoverWithState } from "../rover/roverWithState";
import { roverCommandInterface } from "../rover/command/roverCommand.interface";
import { Position } from "../geometry/position";

export class MissionControl {
  private readonly _planet: Planet;
  private readonly _roverInterpreter: RoverInterpreter;
  private readonly _roverWithState: RoverWithState;

  public constructor(
    planet: Planet,
    roverInterpreter: RoverInterpreter,
    roverWithState: RoverWithState,
  ) {
    this._planet = planet;
    this._roverInterpreter = roverInterpreter;
    this._roverWithState = roverWithState;
  }

  public moveCoordinates(command: roverCommandInterface) {
    const newPosition = this._roverWithState.Position;

    if (this.hasObstacleOnPath(newPosition)) {
      this._roverInterpreter.Interpreter(command);
    }
  }

  private hasObstacleOnPath(position: Position): boolean {
    const point = position.getPoint();
    return this._planet.dependingOnAccessibility<boolean>(
      point,
      () => true,
      () => false,
    );
  }
}
