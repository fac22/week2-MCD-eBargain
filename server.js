'use strict';

const express = require('express');
const db = require('./database/connection.js');
const server = express();
const html = require('./routes/html.js');
const model = require('./database/model.js');

server.use(express.static('./public'));

server.get('/', (request, response) => {
  // let productList = '';
  // let productCategorys = '';

  let getUsers1 = model.getUsers();
  let getUsers2 = model.getUsersProductOrder();

  console.log(getUsers1);
  console.log(getUsers2);

  // db.query(
  //   'SELECT * FROM products INNER JOIN products_category ON products.category_id = products_category.id ORDER BY products.category_id DESC;'
  // )
  //   .then((products) => {
  //     productList = products.rows
  //       .map((product) => {
  //         return `<li>${product.product_name} - ${product.product_description} - ${product.product_price} - ${product.catagory_name}</li>`;
  //       })
  //       .join('');
  //   })
  //   .then(() => {})

  //   .then(() => {
  //     response.send(html(productCategorys, productList));
  //   })
  //   .catch((error) =>
  //     response.status(404).send('😕 Error: Something went wrong 🛒' + error)
  //   );
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));

//  db.query('SELECT category_name FROM products_category').then((products) => {
//    productCategorys = products.rows.map((category) => {
//      return `<option value="${category.catagory_name}">${category.catagory_name}</option>`;
//    });
//  });
