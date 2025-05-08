class AdminController {
    /** 
     * @param {object} io
     */
    
    constructor(io) {
        this.io = io;
    }

    handleConnection(socket) {
        socket.on("startPandol", () => {
            console.log("startPandol");
            socket.broadcast.emit("startPandol");
            socket.emit("startPandol");
        });

        socket.on("stopPandol", () => {
            console.log("stopPandol");
            socket.broadcast.emit("stopPandol");
            socket.emit("stopPandol");
        });

        socket.on("finishSession", () => {
            console.log("Hide All Cards");
            socket.broadcast.emit("finishSession");
        });

    }
}

module.exports = AdminController;
