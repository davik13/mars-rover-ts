import { PlanetBuilder } from "./topology/planet.builder";
import { Orientations } from "./topology/orientation";
import { RoverInterpreter } from "./interpreter/roverInterpreter";
import { RoverWithState } from "./rover/roverWithState";
import { Position } from "./geometry/position";
import { MissionControl } from "./missionControl/missionControl";
import { WholeNumber } from "./math/WholeNumber";
import { Point } from "./geometry/point";

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
