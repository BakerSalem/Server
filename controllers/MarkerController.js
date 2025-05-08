class MarkerController {
    /**
     * @param {object} io
     */
    constructor(io) {
        this.io = io;
    }

    handleConnection(socket) {
        // Listen for marker updates from clients
        socket.on("markerUpdate", (data) => {
            socket.broadcast.emit("markerUpdate", data);
        });
    }
}

module.exports = MarkerController;
