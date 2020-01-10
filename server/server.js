const express = require("express");
const http = require("http");

const app = express();
const server = http.createServer(app);
const port = process.env.PORT || 3000;

//setup server
server.listen(port, function () {
  console.log("Server is listening on port:" + port);
});
app.use(express.static(__dirname + "/dist"));