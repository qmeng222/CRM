// // syntax used in Node.js:
// const express = require("express");

// syntax used in ES6 modules:
import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import routes from "./src/routes/crmRoutes";

const app = express();
const PORT = 3000;

// Mongoose connection:
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/CRMdb", {
  useNewUrlParser: true,
});

// bodyParser setup:
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// invoke the routes:
routes(app);

app.get("/", (req, res) =>
  res.send(`Node and Express server is running on port ${PORT}.`)
);

app.listen(PORT, () => console.log(`The server is running on port ${PORT}`));
