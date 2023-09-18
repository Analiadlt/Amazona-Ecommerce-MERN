// const express = require("express");
import express from "express";
// const cookieParser = require('cookie-parser');
// const bodyParser = require('body-parser');
// const morgan = require('morgan');
// const routes = require('./routes/index.routes.js');

import data from "./data.js";

const server = express();

// server.name = "API";

// server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
// server.use(bodyParser.json({ limit: '50mb' }));
// server.use(cookieParser());
// server.use(morgan('dev'));
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:5173"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

// server.use('/', routes);
server.get("/api/products", (req, res) => {
    res.send(data.products);
  });

  server.get("/api/products/slug/:slug", (req, res) => {
   const product = data.products.find((x)=> x.slug === req.params.slug)
   if (product) {
    res.send(product)
   } else {
    res.status(404).send({message: 'Product Not Found'})
   }
  });
// Error catching endware.
server.use((err, req, res, next) => {
  // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

// module.exports = server;
export default server;
