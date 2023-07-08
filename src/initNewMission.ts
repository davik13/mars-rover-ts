import { PlanetBuilder } from "./topology/planet.builder.js";
import { Orientations } from "./topology/orientation.js";
import { RoverInterpreter } from "./interpreter/roverInterpreter.js";
import { RoverWithState } from "./rover/roverWithState.js";
import { Position } from "./geometry/position.js";
import { MissionControl } from "./missionControl/missionControl.js";
import { WholeNumber } from "./math/WholeNumber.js";
import { Point } from "./geometry/point.js";

export class InitNewMission {
  public startMission(): MissionControl {
    const planetBuilder = new PlanetBuilder()
      .withSize(10)
      .haveAnObstacleAtCoordinates(2, 3)
      .haveAnObstacleAtCoordinates(5, 7);
    const planet = planetBuilder.build();

    const orientation = Orientations.North;
    const roverWithState = new RoverWithState(
      orientation,
      new Position(new Point(new WholeNumber(0), new WholeNumber(0)), planet),
    );

    const roverInterpreter = new RoverInterpreter(roverWithState);

    return new MissionControl(planet, roverInterpreter, roverWithState);
  }
}
