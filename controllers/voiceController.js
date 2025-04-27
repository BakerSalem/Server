class VoiceController {
     /** 
     * @param {object} io
     */
    constructor(io) {
        this.io = io;
    }

    handleConnection(socket) {
        socket.on("startVoice", () => {
            console.log("startVoice");
            socket.broadcast.emit("startVoice");
            socket.emit("startVoice");
        });

        socket.on("stopVoice", () => {
            console.log("stopVoice");
            socket.broadcast.emit("stopVoice");
            socket.emit("stopVoice");
        });
    }
}

module.exports = VoiceController;
