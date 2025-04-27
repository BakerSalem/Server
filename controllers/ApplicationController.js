class ApplicationController {
    /** 
    * @param {object} io
    */
    constructor(io) {
        this.io = io;
    }

    handleConnection(socket) {
        socket.on("appSelect", (data) => {
            console.log("appSelect " + data.ID);
            socket.broadcast.emit("appSelect", data); // Send to others
        });

    }
}

module.exports = ApplicationController;
