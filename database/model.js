'use strict';

// const promise1 = Promise.resolve(3);
// const promise2 = 42;
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 100, 'foo');
// });

// Promise.all([promise1, promise2, promise3]).then((values) => {
//   console.log(values);
// });
// // expected output: Array [3, 42, "foo"]

const db = require('./connection.js');

function getUsers() {
  return db.query('SELECT * FROM users').then((result) => result.rows);
}

function getProductOrder() {
  // return db.query("SELECT * FROM users").then((result) => result.rows);

  return db
    .query(
      'SELECT * FROM products INNER JOIN products_category ON products.category_id = products_category.id ORDER BY products.category_id DESC;'
    )
    .then((result) => result.rows);
}

function getCategorys() {
  return db
    .query('SELECT catagory_name FROM products_category')
    .then((result) => result.rows);
}

module.exports = { getUsers, getProductOrder, getCategorys };
