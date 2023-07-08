import { RoverBuilder } from "./utilities/rover.builder";
import { TestPrimitives } from "./utilities/testPrimitives";
import { CartesianData } from "./utilities/cartesianData";
import { PositionBuilder } from "./utilities/position.builder";
import { PlanetBuilder } from "../src/topology/planet.builder";
const each = require("jest-each").default;
describe("FEATURE Obstacles", () => {
    each(new CartesianData(TestPrimitives.Orientations).toTestCases()).it("ETANT DONNE un rover posé en (0,0) orienté %s sur une planet de size 2 " +
        "ET 3 obstacles sur les autres emplacements " +
        "QUAND il avance " +
        "ALORS il ne bouge pas", (orientation) => {
        const planet = new PlanetBuilder()
            .withSize(2)
            .haveAnObstacleAtCoordinates(0, 1)
            .haveAnObstacleAtCoordinates(1, 0)
            .haveAnObstacleAtCoordinates(1, 1)
            .build();
        const startPosition = new PositionBuilder()
            .origin()
            .onPlanet(planet)
            .build();
        const rover = new RoverBuilder()
            .havingForPosition(startPosition)
            .havingForOrientation(orientation)
            .build();
        const finalState = rover.goAhead();
        expect(finalState.Position).toEqual(startPosition);
    });
});
//# sourceMappingURL=obstacles.test.js.map