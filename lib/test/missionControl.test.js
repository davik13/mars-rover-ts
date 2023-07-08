import { MissionControl } from "../src/missionControl/missionControl";
import { TestPrimitives } from "./utilities/testPrimitives";
import { PlanetBuilder } from "./utilities/planete.builder";
import { RoverInterpreter } from "../src/interpreter/roverInterpreter";
import { RoverWithState } from "../src/rover/roverWithState";
import { Position } from "../src/geometry/position";
import { Point } from "../src/geometry/point";
import { WholeNumber } from "../src/math/WholeNumber";
const each = require("jest-each").default;
describe("MissionControl", () => {
    each(TestPrimitives.Orientations).it("should move the rover if there are no obstacles on the path", (orientation) => {
        const planet = new PlanetBuilder().withSize(10).build();
        const roverWithState = new RoverWithState(orientation, new Position(new Point(new WholeNumber(0), new WholeNumber(0)), planet));
        const roverInterpreter = new RoverInterpreter(roverWithState);
        const missionControl = new MissionControl(planet, roverInterpreter, roverWithState);
        const mockCommand = {
            executeOn: jest.fn(),
        };
        const mockPosition = new Position(new Point(new WholeNumber(0), new WholeNumber(0)), planet);
        const hasObstacleOnPathMock = jest.spyOn(missionControl, "hasObstacleOnPath");
        hasObstacleOnPathMock.mockReturnValue(false);
        const interpreterMock = jest.spyOn(RoverInterpreter.prototype, "Interpreter");
        missionControl.moveCoordinates(mockCommand);
        expect(hasObstacleOnPathMock).toHaveBeenCalledWith(mockPosition);
        expect(interpreterMock).toHaveBeenCalledWith(mockCommand);
    });
});
//# sourceMappingURL=missionControl.test.js.map