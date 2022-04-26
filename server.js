const express = require('express');
const cors = require('cors');

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
const corsOptions = {
    origin: [
        "http://localhost:3000",
        "https://emailbuilder-dev.cfapps.eu10.hana.ondemand.com"
    ]
};
module.exports = {corsOptions}

// Controllers
const dam = require("./controller/dam/damController");
const ptt = require("./controller/ptt/pttController");
const marketo = require("./controller/marketo/marketoController");

// const WebSocketServer = require('ws').Server
// //We will create the websocket server on the port given by Cloud Foundry --> Port 8080
// const ws = new WebSocketServer({ port: 8888 });

// ws.on('connection', function (socket) {
//   socket.send('Hi, this is the Echo-Server');
//   socket.on('message', function (message) {
//     console.log('Received Message: ' +  message);
//     socket.send('Echo: ' + message);
//   });
// }); 

app.use('/', dam);
app.use('/', ptt);
app.use('/', marketo);

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
});