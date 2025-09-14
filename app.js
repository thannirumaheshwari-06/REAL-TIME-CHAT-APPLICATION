// Create WebSocket connection
const socket = new WebSocket('ws://localhost:3000');

// Cache DOM elements
const form = document.querySelector('form');
const input = document.querySelector('input');
const messagesList = document.querySelector('ul');

// Handle form submission
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const message = input.value.trim();
    if (message && socket.readyState === WebSocket.OPEN) {
        socket.send(message);

        // Optionally add your own message to the list
        const li = document.createElement('li');
        li.textContent = `${message}`;
        messagesList.appendChild(li);

        input.value = '';
        input.focus();
    } else if (socket.readyState !== WebSocket.OPEN) {
        alert('WebSocket is not connected.');
    }
});



// Optional: Handle connection events
socket.addEventListener('open', () => {
    console.log('Connected to WebSocket server');
});

socket.addEventListener('close', () => {
    console.log('WebSocket connection closed');
});

socket.addEventListener('error', (error) => {
    console.error('WebSocket error:', error);
});
