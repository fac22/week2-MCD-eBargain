"use strict";

const express = require("express");

const server = express();

server.get("/", (request, response) => {
  //   console.log(request.method + " " + request.url);
  console.log("hello");
  response.send("hello");
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
