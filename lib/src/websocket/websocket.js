import { Server } from "socket.io";
const WEBSOCKET_CORS = {
    origin: "*",
    methods: ["GET", "POST"],
};
class Websocket extends Server {
    constructor(httpServer) {
        super(httpServer, {
            cors: WEBSOCKET_CORS,
        });
    }
    static getInstance(httpServer) {
        if (!Websocket.io) {
            Websocket.io = new Websocket(httpServer);
        }
        return Websocket.io;
    }
    initializeHandlers(socketHandlers) {
        socketHandlers.forEach((element) => {
            let namespace = Websocket.io.of(element.path, (socket) => {
                element.handler.handleConnection(socket);
            });
            if (element.handler.middlewareImplementation) {
                namespace.use(element.handler.middlewareImplementation);
            }
        });
    }
}
export default Websocket;
//# sourceMappingURL=websocket.js.map