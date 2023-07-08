import { Server, Socket } from "socket.io";
import { roverCommandInterface } from "../rover/commande/roverCommand.interface";
import { SimpleCommand } from "../rover/commande/SimpleCommand";
import { InitNewMission } from "../initNewMission";

interface ServerToClientEvents {
  noArg: () => void;
  basicEmit: (a: number, b: string, c: Buffer) => void;
  withAck: (d: string, callback: (e: number) => void) => void;
}

interface ClientToServerEvents {
  hello: () => void;
}

interface InterServerEvents {
  ping: () => void;
}

interface SocketData {
  name: string;
  age: number;
}

const io = new Server<
  ClientToServerEvents,
  ServerToClientEvents,
  InterServerEvents,
  SocketData
>();

const initNewMission = new InitNewMission();

io.on("connection", (socket: Socket) => {
  console.log("A new client connected");

  socket.on("command", (command: string) => {
    const roverCommand: roverCommandInterface = new SimpleCommand(command);

    const missionControl = initNewMission.startMission();

    missionControl.moveCoordinates(roverCommand);
  });

  socket.on("disconnect", () => {
    console.log("A client disconnected");
  });
});
