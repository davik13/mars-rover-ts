class ControlRoverSocket {
    constructor(missionControl) {
        this._missionControl = missionControl;
    }
    handleConnection(socket) {
        socket.emit("ping", "socket connection");
    }
    middlewareImplementation(socket, next) {
        return next();
    }
}
export default ControlRoverSocket;
//# sourceMappingURL=controlRover.socket.js.map