const http = require('http');
const socketIo = require('socket.io');
const expressApp = require('./app'); // ملف إعدادات Express
const os = require('os');

// إعداد Express
const app = expressApp();
const server = http.createServer(app);
const io = socketIo(server);

io.on("connection", (socket) => {
    console.log(`Client connected: ${socket.id}`);

    socket.on("appSelect", (data) => {
        console.log("appSelect "+data.ID);
        socket.broadcast.emit("appSelect", data); // Send to others
    });

    socket.on("cameraUpdate", (data) => {
        socket.broadcast.emit("cameraUpdate", data); // Send to others
    });
    
    socket.on("startPandol", () => {
        console.log("startPandol");
        socket.broadcast.emit("startPandol"); // Send to others
        socket.emit("startPandol"); // Send to me
    });
    socket.on("stopPandol", () => {
        console.log("stopPandol");
        socket.broadcast.emit("stopPandol"); // Send to others
        socket.emit("stopPandol"); // Send to me
    });

    socket.on("carSpeed", (data) => {
        console.log("carSpeed");
        socket.broadcast.emit("carSpeed", data); // Send to others
        socket.emit("carSpeed", data); // Send to me
    });

    socket.on("carStart", () => {
        console.log("carStart");
        socket.broadcast.emit("carStart"); // Send to others
        socket.emit("carStart"); // Send to me
    });

    socket.on("carStop", () => {
        console.log("carStop");
        socket.broadcast.emit("carStop"); // Send to others
        socket.emit("carStop");
    });

    socket.on("carRestart", () => {
        console.log("carRestart");
        socket.broadcast.emit("carRestart"); // Send to others
        socket.emit("carRestart"); // Send to me
    });

    socket.on("cardFlip", (data) => {
        console.log("cardFlip: ",data.ID);
        socket.broadcast.emit("cardFlip", data); // Send to others
        socket.emit("cardFlip", data); // Send to me
    });
    
    socket.on("showAllCards", () => {
        console.log("Show All Cards");
        socket.broadcast.emit("showAllCards");
        socket.emit("showAllCards");
    });

    socket.on("hideAllCards", () => {
        console.log("Hide All Cards");
        socket.broadcast.emit("hideAllCards");
        socket.emit("hideAllCards");
    });

    socket.on("finishSession", () => {
        console.log("Hide All Cards");
        socket.broadcast.emit("finishSession"); // Send to others
    });

});

// function getLocalIP() {
//     const interfaces = os.networkInterfaces();
//     for (const name in interfaces) {
//         for (const net of interfaces[name]) {
//             if (net.family === 'IPv4' && !net.internal) {
//                 return net.address;
//             }
//         }
//     }
//     return 'Not found';
// }

function getLocalIP() {
    const interfaces = os.networkInterfaces();
    for (const name in interfaces) {
        for (const net of interfaces[name]) {
            if (net.family === 'IPv4' && !net.internal && net.address === "10.8.8.94") {
                return net.address;
            }
        }
    }
    return null; // Return null if the address is not found
}


const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
    console.log("Local IP:", getLocalIP());
    console.log(`Server running on http://localhost:${PORT}`);
    
});