const express = require("express");
const app = express();
const mongoose = require("mongoose");
const server = require("http").createServer(app);

app.use(express.json());

// Production Phase //
server.listen(process.env.PORT || 6000, function () {
  var port = server.address().port;
  console.log("Express is running on Port" + port);
});
