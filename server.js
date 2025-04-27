const http = require('http');
const socketIo = require('socket.io');
const expressApp = require('./app');

const getLocalIP = require('./utils/getLocalIP');

// Import Socket.IO controllers
const ApplicationController = require('./controllers/ApplicationController')
const AdminController = require('./controllers/adminController');
const CameraController = require('./controllers/CameraController');
const CarController = require('./controllers/carController');
const CardController = require('./controllers/cardController');
const HandController = require('./controllers/handController');
const VoiceController = require('./controllers/voiceController');



const app = expressApp();
const server = http.createServer(app);
const io = socketIo(server);

const applicationController = new ApplicationController(io);
const adminController = new AdminController(io);
const cameraController = new CameraController(io);
const carController = new CarController(io);
const cardController = new CardController(io);
const handController = new HandController(io);
const voiceController = new VoiceController(io);

// Socket.IO connection logic
io.on("connection", (socket) => {
    console.log(`Client connected: ${socket.id}`);

    applicationController.handleConnection(socket);
    adminController.handleConnection(socket);
    cameraController.handleConnection(socket);
    carController.handleConnection(socket);
    cardController.handleConnection(socket);
    handController.handleConnection(socket);
    voiceController.handleConnection(socket);
});


// Start the server
const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
    console.log("Local IP:", getLocalIP());
    console.log(`Server running at http://localhost:${PORT}`);
});
