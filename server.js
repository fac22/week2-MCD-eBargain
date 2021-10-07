'use strict';

const express = require('express');
const db = require('./database/connection.js');
const server = express();
const home = require('./routes/home.js');

// Static file location
server.use(express.static('./public'));

// Middleware - collect post in entirety
const bodyParser = express.urlencoded({ extended: false });

// Home root GET request (when client visits site)
server.get('/', home.get);
server.post('/', bodyParser, home.post);

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
