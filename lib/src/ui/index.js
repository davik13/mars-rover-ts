import { Server } from "socket.io";
import { SimpleCommand } from "../rover/commande/SimpleCommand";
import { InitNewMission } from "../initNewMission";
const io = new Server();
const initNewMission = new InitNewMission();
io.on("connection", (socket) => {
    console.log("A new client connected");
    socket.on("command", (command) => {
        const roverCommand = new SimpleCommand(command);
        const missionControl = initNewMission.startMission();
        missionControl.moveCoordinates(roverCommand);
    });
    socket.on("disconnect", () => {
        console.log("A client disconnected");
    });
});
//# sourceMappingURL=index.js.map