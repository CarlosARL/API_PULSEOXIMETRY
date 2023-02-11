const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);

io.on("connection", (socket) => {
  console.log("Client connected");
  socket.on("message", (data) => {
    console.log("Received message:", data);
  });
});

server.listen(1000, () => {
  console.log("Server listening on port 3000");
});
