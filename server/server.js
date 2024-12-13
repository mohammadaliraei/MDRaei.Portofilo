const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const https = require("https");
const fs = require("fs");
const messageRoute = require("./routes/MessageRoute");

// Load environment variables
dotenv.config();

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: ["http://mdraei.ir", "http://localhost:3000"],
    methods: ["POST", "GET"],
    credentials: true,
  })
);

// Get environment variables
const mongoURL = process.env.MONGOOSE_URL;
const port = process.env.PORT || 3000;

// Connect to MongoDB
mongoose
  .connect(mongoURL)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

// Use the messageRoute for /message endpoint
app.use("/message", messageRoute);

// Load SSL certificate and key
const httpsOptions = {
  key: fs.readFileSync("/etc/letsencrypt/live/mdraei.ir/privkey.pem"),
  cert: fs.readFileSync("/etc/letsencrypt/live/mdraei.ir/fullchain.pem"),
};

// Start HTTPS server
https.createServer(httpsOptions, app).listen(443, () => {
  console.log("HTTPS server is running on port 443");
});

// Optionally start an HTTP server to redirect to HTTPS
const http = require("http");
http
  .createServer((req, res) => {
    res.writeHead(301, { Location: `https://${req.headers.host}${req.url}` });
    res.end();
  })
  .listen(80, () => {
    console.log("HTTP server is redirecting to HTTPS on port 80");
  });
