class CameraController {
    /** 
    * @param {object} io
    */
    constructor(io) {
        this.io = io;
    }

    handleConnection(socket) {
        socket.on("cameraUpdate", (data) => {
           // console.log("cameraUpdate", data);
            socket.broadcast.emit("cameraUpdate", data);
        });
    }
}

module.exports = CameraController;
