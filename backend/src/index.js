require("dotenv").config();
const express = require("express");
const app = require("./app");
const { connectDatabase } = require("./config/db");
const path = require("path");
const port = process.env.PORT || 4000;

//connect the database
connectDatabase();

if (process.env.NODE_ENV === "production") {
  app.get("/", (req, res) => {
    app.use(express.static(path.resolve(__dirname, "build")));
    res.sendFile(path.resolve(__dirname, "build", "index.html"));
  });
}

//listen the port
const server = app.listen(port, (req, res) => {
  console.log(`Express is Running on ${port}`);
});

module.exports = server;
