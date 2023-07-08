import { RoverBuilder } from "./utilities/rover.builder";
import { RoverInterpreter } from "../src/interpreter/roverInterpreter";
import { CartesianData } from "./utilities/cartesianData";
import { TestPrimitives } from "./utilities/testPrimitives";
import { generateCombinations } from "./utilities/generateCombinations";
import { PositionBuilder } from "./utilities/position.builder";
import { SimpleCommand } from "../src/rover/commande/SimpleCommand";
import { CommandComplex } from "../src/rover/commande/CommandComplex";
const each = require("jest-each").default;
const startLatitudes = [0, 1];
const startLongitude = [0, 1];
const testableCommands = ["A", "R", "D", "G"];
const numbersOperands = [2, 3, 5];
function generateCommandsComplexes() {
    let commands = [];
    for (const numberOperands of numbersOperands) {
        const combinations = generateCombinations(testableCommands, numberOperands);
        for (const combination of combinations)
            commands.push(combination);
    }
    return commands;
}
describe("FEATURE Interpreter", () => {
    each(new CartesianData(startLatitudes, startLongitude).toTestCases()).it("ETANT DONNE un Interpreter " +
        "ET un Rover en position %s, %s " +
        "QUAND on lui envoie 'A' " +
        "ALORS le Rover avance", (latitude, longitude) => {
        const commonStartPosition = new PositionBuilder()
            .haveForCoordinates(latitude, longitude)
            .build();
        let testRover = new RoverBuilder()
            .havingForPosition(commonStartPosition)
            .build();
        const interpretedRover = new RoverBuilder()
            .havingForPosition(commonStartPosition)
            .build();
        let interpreter = new RoverInterpreter(interpretedRover);
        interpreter = interpreter.Interpreter(new SimpleCommand("A"));
        testRover = testRover.goAhead();
        expect(interpreter).toEqual(new RoverInterpreter(testRover));
    });
    each(new CartesianData(startLatitudes, startLongitude).toTestCases()).it("ETANT DONNE un Interpreter " +
        "ET un Rover en position %s, %s " +
        "QUAND on lui envoie 'R' " +
        "ALORS le Rover avance", (latitude, longitude) => {
        const commonStartPosition = new PositionBuilder()
            .haveForCoordinates(latitude, longitude)
            .build();
        let testRover = new RoverBuilder()
            .havingForPosition(commonStartPosition)
            .build();
        const interpretedRover = new RoverBuilder()
            .havingForPosition(commonStartPosition)
            .build();
        let interpreter = new RoverInterpreter(interpretedRover);
        interpreter = interpreter.Interpreter(new SimpleCommand("R"));
        testRover = testRover.backOff();
        expect(interpreter).toEqual(new RoverInterpreter(testRover));
    });
    each(new CartesianData(TestPrimitives.Orientations).toTestCases()).it("ETANT DONNE un Interpreter " +
        "ET un Rover orienté %s " +
        "QUAND on lui envoie 'D' " +
        "ALORS le Rover tourne à droite", (startOrientation) => {
        let testRover = new RoverBuilder()
            .havingForOrientation(startOrientation)
            .build();
        const interpretedRover = new RoverBuilder()
            .havingForOrientation(startOrientation)
            .build();
        let interpreter = new RoverInterpreter(interpretedRover);
        interpreter = interpreter.Interpreter(new SimpleCommand("D"));
        testRover = testRover.turnRight();
        expect(interpreter).toEqual(new RoverInterpreter(testRover));
    });
    each(new CartesianData(TestPrimitives.Orientations).toTestCases()).it("ETANT DONNE un Interpreter " +
        "ET un Rover orienté %s " +
        "QUAND on lui envoie 'G' " +
        "ALORS le Rover tourne à droite", (startOrientation) => {
        let testRover = new RoverBuilder()
            .havingForOrientation(startOrientation)
            .build();
        const interpretedRover = new RoverBuilder()
            .havingForOrientation(startOrientation)
            .build();
        let interpreter = new RoverInterpreter(interpretedRover);
        interpreter = interpreter.Interpreter(new SimpleCommand("G"));
        testRover = testRover.turnLeft();
        expect(interpreter).toEqual(new RoverInterpreter(testRover));
    });
    each(new CartesianData(["B", "VERFEFEF"]).toTestCases()).it("ETANT DONNE un Interpreter " +
        "ET un Rover " +
        "QUAND on lui envoie une commande invalide " +
        "ALORS une Exception est lancée", (invalidCommand) => {
        const interpreter = new RoverInterpreter(new RoverBuilder().build());
        const commandResult = () => interpreter.Interpreter(new CommandComplex(invalidCommand));
        expect(commandResult).toThrow();
    });
});
describe("FEATURE Commandes Multiples", () => {
    each(new CartesianData(TestPrimitives.Orientations, startLatitudes, startLongitude, generateCommandsComplexes()).toTestCases()).it("ETANT DONNE un Interpreter " +
        "ET un Rover orienté %s en position %s, %s " +
        "QUAND on lui envoie plusieurs commandes %s " +
        "ALORS le Rover se comporte comme si chacune avait été envoyée à la suite", (orientation, latitude, longitude, command) => {
        const commonStartPosition = new PositionBuilder()
            .haveForCoordinates(latitude, longitude)
            .build();
        const configurationCommune = new RoverBuilder()
            .havingForPosition(commonStartPosition)
            .havingForOrientation(orientation);
        const testRover = configurationCommune.build();
        const testedRover = configurationCommune.build();
        let testedInterpreter = new RoverInterpreter(testedRover);
        let witnessInterpreter = new RoverInterpreter(testRover);
        for (const simpleCommand of command) {
            witnessInterpreter = witnessInterpreter.Interpreter(new SimpleCommand(simpleCommand));
        }
        testedInterpreter = testedInterpreter.Interpreter(new CommandComplex(command));
        expect(testedInterpreter).toStrictEqual(witnessInterpreter);
    });
});
//# sourceMappingURL=interpreter.test.js.map