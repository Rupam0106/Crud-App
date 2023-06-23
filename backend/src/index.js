require("dotenv").config();
const express = require("express");
const app = require("./app");
const { connectDatabase } = require("./config/db");
const path = require("path");
const port = process.env.PORT || 4000;

//connect the database
connectDatabase();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

//listen the port
const server = app.listen(port, (req, res) => {
  console.log(`Express is Running on ${port}`);
});

module.exports = server;
