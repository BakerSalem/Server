class ModeRoomController {
    /** 
    * @param {object} io
    */
    constructor(io) {
        this.io = io;
    }

    handleConnection(socket) {
        socket.on("drawShow", () => {
            //console.log("drawShow");
            socket.broadcast.emit("drawShow");
            socket.emit("drawShow");
        });

        socket.on("writeShow", () => {
            //console.log("writeShow");
            socket.broadcast.emit("writeShow");
            socket.emit("writeShow");
        });

        socket.on("engShow", () => {
            //console.log("engShow");
            socket.broadcast.emit("engShow");
            socket.emit("engShow");
        });

        socket.on("arbShow", () => {
            //console.log("arbShow");
            socket.broadcast.emit("arbShow");
            socket.emit("arbShow");
        });

        socket.on("textUpdate", (data) => {
            //console.log("textUpdate");
            socket.broadcast.emit("textUpdate", data);
        });

    }
}

module.exports = ModeRoomController;
