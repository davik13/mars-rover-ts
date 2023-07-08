import { Orientation } from "../topology/orientation";
import { Position } from "../geometry/position";
import { RoverInterface } from "./rover.interface";

export class RoverWithState implements RoverInterface {
  public readonly Orientation: Orientation;
  public readonly Position: Position;

  public constructor(orientation: Orientation, position: Position) {
    this.Orientation = orientation;
    this.Position = position;
  }

  public turnRight(): RoverWithState {
    return new RoverWithState(
      this.Orientation.clockwiseRotation(),
      this.Position,
    );
  }

  public turnLeft(): RoverWithState {
    return new RoverWithState(
      this.Orientation.antiClockwiseRotation(),
      this.Position,
    );
  }

  public goAhead(): RoverWithState {
    return new RoverWithState(
      this.Orientation,
      this.Orientation.goAhead(this.Position),
    );
  }

  public backOff(): RoverWithState {
    return new RoverWithState(
      this.Orientation,
      this.Orientation.backoff(this.Position),
    );
  }
}
