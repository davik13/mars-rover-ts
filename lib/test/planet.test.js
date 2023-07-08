import { RoverBuilder } from "./utilities/rover.builder";
import { CartesianData } from "./utilities/cartesianData";
import { TestPrimitives } from "./utilities/testPrimitives";
import { PositionBuilder } from "./utilities/position.builder";
import { PlanetBuilder } from "./utilities/planete.builder";
const each = require("jest-each").default;
const planetsSizes = [1, 2, 10];
const startLatitudes = [0, 1, 11];
const startLongitudes = [0, 1, 11];
describe("FEATURE Planète", () => {
    each(new CartesianData(TestPrimitives.Orientations, startLatitudes, startLongitudes, planetsSizes).toTestCases()).it("ETANT DONNE un Rover orienté %s " +
        "ET posé aux coordonnées %s, %s sur une planet de size %s " +
        "QUAND il avance suffisamment pour faire le tour de la planet " +
        "ALORS il est revenu à son point de départ", (orientation, startLatitude, startLongitude, size) => {
        const planet = new PlanetBuilder().withSize(size).build();
        const originalPosition = new PositionBuilder()
            .haveForCoordinates(startLatitude, startLongitude)
            .onPlanet(planet)
            .build();
        let rover = new RoverBuilder()
            .havingForOrientation(orientation)
            .havingForPosition(originalPosition)
            .build();
        for (let i = 0; i < size; i++) {
            rover = rover.goAhead();
        }
        expect(rover.Position).toStrictEqual(originalPosition);
    });
});
//# sourceMappingURL=planet.test.js.map