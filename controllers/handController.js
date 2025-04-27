class HandController {
     /** 
     * @param {object} io
     */
    constructor(io) {
        this.io = io;
    }

    handleConnection(socket) {
        // Handle hand pose updates
        socket.on("handUpdate", (data) => {
            socket.broadcast.emit("handUpdate", data);
        });

        // Handle toggling objects in the hand (like rose or candle)
        socket.on("handObjectToggle", (data) => {
            socket.broadcast.emit("handObjectToggle", data);
        });
    }
}

module.exports = HandController;
