import { WebSocketServer } from "ws";
const wss = new WebSocketServer({ port: 8000 });

wss.on("connection", function (socket) {

  socket.on("message", (e) => {
    console.log(e.toString());
    
  if(e.toString() === "ping"){
    socket.send("pong");
  }
  });
 
});
