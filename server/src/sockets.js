const socketIO = require('socket.io');

init = (server) => {
    const io = socketIO(server);
    console.log('Sockets server is listening for connections!');
    io.on('connection', (socket) => {
        console.log('Client connected!');
    })
}

module.exports = {
    init
};