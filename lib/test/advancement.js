import { RoverBuilder } from "./utilities/rover.builder";
import { CartesianData } from "./utilities/cartesianData";
import { PositionBuilder } from "./utilities/position.builder";
import { TestPrimitives } from "./utilities/testPrimitives";
import { Orientations } from "../src/topology/orientation";
const each = require("jest-each").default;
const startLatitudes = [0, 1];
const startLongitudes = [0, 1];
const numberOfMovements = [1, 2];
describe("FEATURE Avancement", () => {
    each(new CartesianData(startLatitudes, startLongitudes, TestPrimitives.Orientations).toTestCases()).it("ETANT DONNE un rover démarrant en %s, %s, orienté %s " +
        "QUAND il avance puis recule " +
        "ALORS sa nouvelle position est sa position de départ", (startLatitude, startLongitude, orientation) => {
        const originalPosition = new PositionBuilder()
            .haveForCoordinates(startLatitude, startLongitude)
            .build();
        let rover = new RoverBuilder()
            .havingForPosition(originalPosition)
            .havingForOrientation(orientation)
            .build();
        rover = rover.goAhead().backOff();
        expect(rover.Position).toStrictEqual(originalPosition);
    });
    each(new CartesianData(numberOfMovements).toTestCases()).it("ETANT DONNE un rover orienté Nord " +
        "QUAND il avance %s fois " +
        "ALORS la composante latitudinale de sa position augmente d'autant", (numberOfMovements) => {
        const originalPosition = PositionBuilder.origin();
        let rover = new RoverBuilder()
            .havingForOrientation(Orientations.North)
            .havingForPosition(originalPosition)
            .build();
        let expectedPosition = originalPosition;
        for (let movements = 0; movements < numberOfMovements; movements++) {
            expectedPosition = expectedPosition.incrementLatitudeExceptObstacle();
            rover = rover.goAhead();
        }
        expect(rover.Position).toStrictEqual(expectedPosition);
    });
    each(new CartesianData(numberOfMovements).toTestCases()).it("ETANT DONNE un rover orienté Sud " +
        "QUAND il avance %s fois " +
        "ALORS la composante latitudinale de sa position diminue d'autant", (numberOfMovements) => {
        const originalPosition = PositionBuilder.origin();
        let rover = new RoverBuilder()
            .havingForOrientation(Orientations.South)
            .havingForPosition(originalPosition)
            .build();
        let expectedPosition = originalPosition;
        for (let movements = 0; movements < numberOfMovements; movements++) {
            expectedPosition = expectedPosition.decrementLatitudeExceptObstacle();
            rover = rover.goAhead();
        }
        expect(rover.Position).toStrictEqual(expectedPosition);
    });
    each(new CartesianData(numberOfMovements).toTestCases()).it("ETANT DONNE un rover orienté Est " +
        "QUAND il avance %s fois " +
        "ALORS la composante longitudinale de sa position augmente d'autant", (numberOfMovements) => {
        const originalPosition = PositionBuilder.origin();
        let rover = new RoverBuilder()
            .havingForOrientation(Orientations.East)
            .havingForPosition(originalPosition)
            .build();
        let expectedPosition = originalPosition;
        for (let movements = 0; movements < numberOfMovements; movements++) {
            expectedPosition = expectedPosition.incrementLongitudeExpectObstacle();
            rover = rover.goAhead();
        }
        expect(rover.Position).toStrictEqual(expectedPosition);
    });
    each(new CartesianData(numberOfMovements).toTestCases()).it("ETANT DONNE un rover orienté Ouest " +
        "QUAND il avance %s fois " +
        "ALORS la composante longitudinale de sa position diminue d'autant", (numberOfMovements) => {
        const originalPosition = PositionBuilder.origin();
        let rover = new RoverBuilder()
            .havingForOrientation(Orientations.West)
            .havingForPosition(originalPosition)
            .build();
        let expectedPosition = originalPosition;
        for (let movements = 0; movements < numberOfMovements; movements++) {
            expectedPosition = expectedPosition.decrementLongitudeExpectObstacle();
            rover = rover.goAhead();
        }
        expect(rover.Position).toStrictEqual(expectedPosition);
    });
});
//# sourceMappingURL=advancement.js.map