const express = require("express");
const authRoutes = require("./routers/authRoutes");
const moviesRoutes = require("./routers/moviesRoutes");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();

app.use(express.json());
app.use("/", authRoutes);
app.use("/movies", moviesRoutes);

mongoose.connect('mongodb://localhost:27017/STEP').then(() => {
   console.log("Database Connected");

   app.listen(process.env.PORT, () => {
    console.log(`App is listening at port ${process.env.PORT}`);
  });
}) 
