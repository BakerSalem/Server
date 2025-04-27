class CardController {
     /** 
     * @param {object} io
     */
    constructor(io) {
        this.io = io;
    }

    handleConnection(socket) {
        socket.on("cardFlip", (data) => {
            console.log("cardFlip: ", data.ID);
            socket.broadcast.emit("cardFlip", data);
            socket.emit("cardFlip", data);
        });

        socket.on("flipAllCards", () => {
            console.log("Show All Cards");
            socket.broadcast.emit("flipAllCards");
            socket.emit("flipAllCards");
        });
    }
}

module.exports = CardController;
