const express = require("express");
const authRoutes = require("./routers/authRoutes");
const moviesRoutes = require("./routers/moviesRoutes");
const mongoose = require("mongoose");
const { authoriseUser } = require("./middleware/authorizeUser");

require("dotenv").config();

const app = express();

app.use(express.json());
app.use("/", authRoutes);
app.use("/movies", authoriseUser, moviesRoutes);
console.log(process.env.MONGO_URI);
mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log("Database Connected");

  app.listen(process.env.PORT, () => {
    console.log(`App is listening at port ${process.env.PORT}`);
  });
}) 
