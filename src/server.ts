import "reflect-metadata";

import { createServer } from "http";
import {
  createExpressServer,
  RoutingControllersOptions,
} from "routing-controllers";
import { InitNewMission } from "./initNewMission.js";
import Websocket from "./websocket/websocket.js";

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
const io = Websocket.getInstance(httpServer);

io.initializeHandlers([{ path: "/orders" }]);

httpServer.listen(port, () => {
  const mission = new InitNewMission();
  mission.startMission();

  console.log(`The mission is started. listening on port: ${port}`);
});
