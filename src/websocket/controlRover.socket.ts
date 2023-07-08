import { Socket } from "socket.io";
import MySocketInterface from "./mySocketInterface";
import { MissionControlInterface } from "../missionControl/missionControl.interface";

class ControlRoverSocket implements MySocketInterface {
  private readonly _missionControl: MissionControlInterface;

  public constructor(missionControl: MissionControlInterface) {
    this._missionControl = missionControl;
  }

  handleConnection(socket: Socket) {
    socket.emit("ping", "socket connection");
  }

  middlewareImplementation(socket: Socket, next) {
    return next();
  }
}

export default ControlRoverSocket;
