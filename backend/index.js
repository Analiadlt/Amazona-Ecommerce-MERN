// import express from "express";
// import data from "./src/data.js";

// const app = express();

// app.get("/api/products", (req, res) => {
//   res.send(data.products);
// });

// const port = process.env.PORT || 3000;
// app.listen(port, () => {
//   console.log(`Server listening at port: ${port}`);
// });
//Main
// const server = require('./src/app.js');
import server from './src/app.js'
const port = process.env.API_PORT || 3000;

  server.listen(port, () => {
    console.log('%s listening at 3000'); 
  });
