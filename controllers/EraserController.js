class EraserController {
    /**
     * @param {object} io
     */
    constructor(io) {
        this.io = io;
    }

    handleConnection(socket) {
        // Listen for marker updates from clients
        socket.on("eraserUpdate", (data) => {
            socket.broadcast.emit("eraserUpdate", data);
        });
    }
}

module.exports = EraserController;
