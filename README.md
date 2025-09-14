# REAL-TIME-CHAT-APPLICATION

*COMAPANY*: CODTECH IT SOLUTIONS

*NAME*: THANNIRU MAHESHWARI

*INTERN ID*: CT04DY938

*DOMAIN*: FRONTEND WEB DEVELOPMENT

*DURATION*: 4 WEEKS

*MENTOR*: NEELA SANTOSH KUMAR

## 📄 Project Description: WebSocket-Based Real-Time Chat Application 

The WebSocket-Based Real-Time Chat Application is a lightweight, browser-based communication system that enables real-time message exchange between a client and a server using the WebSocket protocol. Built using Node.js, the ws WebSocket library, HTML, CSS, and JavaScript, this project showcases how to establish a persistent, two-way communication channel between a server and multiple clients without relying on traditional HTTP requests.

🧩 Project Overview

The primary purpose of this project is to demonstrate the capabilities of WebSockets in enabling low-latency, bidirectional communication, commonly used in modern web applications such as live chat, notifications, multiplayer games, collaborative tools, and financial dashboards.

In this application, the client side features a simple yet functional chat interface with a form to input messages, a send button, and a live message list. When a user types a message and clicks send, the message is transmitted to the WebSocket server running on ws://localhost:3000. The server receives this message, logs it to the console, and echoes it back to the client. The client displays the sent message in the chat window. This architecture can easily be extended to broadcast messages to multiple connected users.

🛠️ Technologies Used
Technology	Role
HTML5	Builds the chat interface layout
CSS3	Styles the user interface for better readability and appearance
JavaScript (Frontend)	Handles DOM manipulation and WebSocket connection logic
Node.js	Hosts the backend WebSocket server
ws library	Lightweight WebSocket server implementation for Node.js
🔄 How It Works

When the HTML page loads, a WebSocket connection is initiated to ws://localhost:3000.

A simple <form> allows the user to input a message.

Upon submission, the JavaScript captures the form event, prevents the default page reload, and sends the message over the open WebSocket connection.

The server, using the ws module, listens for incoming connections and messages.

When a message is received, it’s logged and sent back (echoed) to the client.

The client receives the echoed message and appends it to the chat log.

🎯 Key Features

Real-time message sending and receiving using WebSockets.

Simple and intuitive user interface.

Echo functionality from server to simulate bi-directional communication.

Message appending to a list using dynamic DOM manipulation.

Alerts if the WebSocket connection is not open or fails.

📚 Learning Objectives

This project demonstrates:

How to create and configure a WebSocket server with Node.js and the ws module.

How to build a real-time client-server communication flow.

Practical use of event listeners (open, message, close, error) in WebSocket APIs.

Building reactive UIs using JavaScript and DOM manipulation.

Establishing a simple development environment using Node.js and npm.

🔧 Setup Instructions

Run npm install to install dependencies (especially ws).

Start the server using npm start or node server.js.

Open index.html in a browser.

Type a message and hit send to see the echo from the server.

🧠 Real-World Use Cases

Live chat applications

Multiplayer online games

Live stock updates and data feeds

Collaborative document editing

Notification systems

📦 Conclusion

This WebSocket-based chat application is a minimal yet powerful example of how real-time web communication works. It introduces the foundational concepts of WebSocket architecture, offering a strong base for more complex applications like chatrooms, real-time dashboards, or collaborative platforms. It’s ideal for beginners learning about networking in web development, as well as a practical starting point for advanced use cases involving persistent connections.

#OUTPUT

<img width="1920" height="1080" alt="Image" src="https://github.com/user-attachments/assets/6ad05633-f1d4-45f4-8d46-cacbd7bfcbd6" />

<img width="809" height="237" alt="Image" src="https://github.com/user-attachments/assets/46ac53bd-afac-492d-bd3b-d4f377dd30c8" />
