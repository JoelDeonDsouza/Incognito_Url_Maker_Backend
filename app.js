require("dotenv/config");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const server = require("http").createServer(app);
const cors = require("cors");

// BaseApi
const incogApi = process.env.API_CALL;

// Routes
const IncognitoRouter = require("./Routers/IncognitoRouter");
app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

// Database connection
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Database Connection Successful");
  })
  .catch((err) => console.log(err));

// API routes
app.use(`${incogApi}incognito`, IncognitoRouter);

// Production Phase //
server.listen(process.env.PORT || 6000, function () {
  var port = server.address().port;
  console.log("Express is running on Port" + port);
});
