import { Orientations } from "../src/topology/orientation";
import { RoverBuilder } from "./utilities/rover.builder";
const each = require("jest-each").default;
describe("FEATURE Rotation", () => {
    each([
        [Orientations.North, 1, Orientations.East],
        [Orientations.East, 1, Orientations.South],
        [Orientations.South, 1, Orientations.West],
        [Orientations.West, 1, Orientations.North],
        [Orientations.North, 2, Orientations.South],
        [Orientations.East, 2, Orientations.West],
        [Orientations.South, 2, Orientations.North],
        [Orientations.West, 2, Orientations.East],
    ]).it("ETANT DONNE un rover orienté %s " +
        "QUAND il tourne à droite %s fois " +
        "ALORS son orientation est %s", (init, countNumber, final) => {
        let rover = new RoverBuilder().havingForOrientation(init).build();
        for (let rotations = 0; rotations < countNumber; rotations++) {
            rover = rover.turnRight();
        }
        expect(rover.Orientation).toEqual(final);
    });
    each([
        [Orientations.North, 1, Orientations.West],
        [Orientations.East, 1, Orientations.North],
        [Orientations.South, 1, Orientations.East],
        [Orientations.West, 1, Orientations.South],
        [Orientations.North, 2, Orientations.South],
        [Orientations.East, 2, Orientations.West],
        [Orientations.South, 2, Orientations.North],
        [Orientations.West, 2, Orientations.East],
    ]).it("ETANT DONNE un rover orienté %s " +
        "QUAND il tourne à gauche %s fois " +
        "ALORS son orientation est %s", (init, countNumber, final) => {
        let rover = new RoverBuilder().havingForOrientation(init).build();
        for (let rotations = 0; rotations < countNumber; rotations++) {
            rover = rover.turnLeft();
        }
        expect(rover.Orientation).toEqual(final);
    });
});
//# sourceMappingURL=rotation.test.js.map