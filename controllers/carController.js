class CarController {
     /** 
     * @param {object} io
     */
    constructor(io) {
        this.io = io;
    }

    handleConnection(socket) {
        socket.on("carSpeed", (data) => {
            console.log("carSpeed");
            socket.broadcast.emit("carSpeed", data);
            socket.emit("carSpeed", data);
        });

        ["carStart", "carStop", "carRestart"].forEach((event) => {
            socket.on(event, () => {
                console.log(event);
                socket.broadcast.emit(event);
                socket.emit(event);
            });
        });
    }
}

module.exports = CarController;
