// server/server.js

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

// ✅ SIMPLE & WORKING CORS (no complex config first)
app.use(cors({
  origin: "http://localhost:3000", // must be exact
  credentials: true
}));

// ✅ Body parser
app.use(express.json());

// ✅ Debug middleware (VERY IMPORTANT)
app.use((req, res, next) => {
  console.log("Request:", req.method, req.url);
  next();
});

// ✅ Routes
app.use("/api/auth", require("./routes/authRoutes"));

// ✅ Test route
app.get("/", (req, res) => {
  res.send("Server working");
});

// ✅ MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log("DB Error:", err));

// ✅ Start server
app.listen(8080, () => {
  console.log("Server running on port 8080");
});

// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// require("dotenv").config();
// // const connectDB = require("./config/db");

// const app = express();

// // Middleware
// // app.use(cors());
// app.use(cors({
//   origin: "http://localhost:3000",
//   methods: ["GET", "POST", "PUT", "DELETE"],
//   credentials: true
// }));
// app.use(express.json());  
// // app.use(express.json());

// // Routes
// app.use("/api/auth", require("./routes/authRoutes"));
// // app.use("/api/user", require("./routes/userRoutes"));
// // DB connection
// // connectDB();
// mongoose.connect(process.env.MONGO_URI)
//   .then(() => console.log("MongoDB Connected"))
//   .catch(err => console.log(err));

// app.listen(5000, () => console.log("Server running on port 5000"));