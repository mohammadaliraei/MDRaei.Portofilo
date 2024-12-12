const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv"); // No need for assignment here
const cors = require("cors");
const messageRoute = require("./routes/MessageRoute");

// Initialize dotenv to load environment variables from .env file
dotenv.config();

const app = express();
app.use(express.json()); // For parsing application/json
app.use(cors()); // Enable Cross-Origin Resource Sharing

// Get the MongoDB URL from environment variables
const mongoURL = process.env.MONGOOSE_URL;

// Get the port from environment variables or default to 3000
const port = process.env.PORT || 3000;

// Connect to MongoDB
mongoose
  .connect(mongoURL)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

// Use the messageRoute for /message endpoint
app.use("/message", messageRoute);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
