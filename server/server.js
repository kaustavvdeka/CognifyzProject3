const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
// const connectDB = require("./config/db");

const app = express();

// Middleware
// app.use(cors());
app.use(cors({
  origin: "http://localhost:3000",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));
app.use(express.json());  
// app.use(express.json());

// Routes
app.use("/api/auth", require("./routes/authRoutes"));
// app.use("/api/user", require("./routes/userRoutes"));
// DB connection
// connectDB();
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.listen(5000, () => console.log("Server running on port 5000"));