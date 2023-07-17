import "reflect-metadata";

import { createServer } from "http";
import {
  createExpressServer,
  RoutingControllersOptions,
} from "routing-controllers";
import { InitNewMission } from "./initNewMission";
import { Response } from "express";
import { roverCommandInterface } from "./rover/command/roverCommand.interface";
import { SimpleCommand } from "./rover/command/SimpleCommand";

require("dotenv").config();

const port = process.env.APP_PORT || 3000;

const routingControllerOptions: RoutingControllersOptions = {
  routePrefix: "v1",
  controllers: [`${__dirname}/modules/http/*.controller.*`],
  validation: true,
  classTransformer: true,
  cors: true,
  defaultErrorHandler: true,
};

const app = createExpressServer(routingControllerOptions);
const httpServer = createServer(app);

const mission = new InitNewMission();
const missionControl = mission.startMission();

app.get("/", (_, res) => {
  res.send(
    "Welcome to Mars Rover Mission Control! \n Send command to rover: http://localhost:3000/{A|R|D|G}",
  );
});
app.get("/A", (_, res) => sendCommand("A", res));
app.get("/R", (_, res) => sendCommand("R", res));
app.get("/D", (_, res) => sendCommand("D", res));
app.get("/G", (_, res) => sendCommand("G", res));

function sendCommand(command: string, res: Response) {
  const roverCommand: roverCommandInterface = new SimpleCommand(command);

  missionControl.moveCoordinates(roverCommand);

  res.send(`Command "${command}" sent successfully.`);
}

httpServer.listen(port, () => {
  console.log(`The mission is started. http://localhost:${port}/`);
});

export { sendCommand };
