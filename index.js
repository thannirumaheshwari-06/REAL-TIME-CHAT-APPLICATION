const WebSocket = require('ws');

// Start WebSocket server on port 3000
const server = new WebSocket.Server({ port: 3000 });

console.log('WebSocket server running at ws://localhost:3000');

server.on('connection', (socket) => {
    console.log('Client connected');

    socket.on('message', (message) => {
        const text = message.toString(); // convert buffer to string
        console.log(`Received: ${text}`);

        // ✅ Correct usage of template literal
        socket.send(`Echo: ${text}`);
    });

    socket.on('close', () => {
        console.log('Client disconnected');
    });

    socket.on('error', (err) => {
        console.error('WebSocket error:', err);
    });
});
