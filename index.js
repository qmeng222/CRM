// // syntax used in Node.js:
// const express = require("express");

// syntax used in ES6 modules:
import express from "express";
import routes from "./src/routes/crmRoutes";

const app = express();
const port = process.env.PORT || 3000;

// invoke the routes:
routes(app);

app.get("/", (req, res) =>
  res.send(`Node and Express server is running on port ${port}.`)
);

app.listen(port, () => console.log(`The server is running on port ${port}`));
