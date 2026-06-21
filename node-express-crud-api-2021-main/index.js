const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");

dotenv.config();
console.log("DB_CONNECT =", process.env.DB_CONNECT);
// connect to db

mongoose.connect(process.env.DB_CONNECT)
  .then(() => console.log("connected to db"))
  .catch((err) => console.log(err));

// Import routes
const productRoutes = require("./routes/product");

// Middlewares
app.use(express.json());
app.use(cors());

// route Middlewares
app.use("/api/products", productRoutes);

app.listen(4000, () => console.log("server up and runing on port 4000!"));
