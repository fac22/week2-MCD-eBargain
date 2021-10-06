'use strict';

const express = require('express');
const db = require('./database/connection.js');
const server = express();

server.get('/', (request, response) => {
  db.query(
    'SELECT * FROM products INNER JOIN products_category ON products.category_id = products_category.id ORDER BY products.category_id DESC;'
  )
    .then((products) => {
      return products.rows
        .map((product) => {
          return `<li>${product.product_name} - ${product.product_description} - ${product.product_price} - ${product.catagory_name}</li>`;
        })
        .join('');
    })
    .then((products) => response.send(`<ul>${products}</ul>`))
    .catch(() =>
      response.status(404).send('😕 Error: Something went wrong 🛒')
    );
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
