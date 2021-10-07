'use strict';

const db = require('./connection.js');

function getUsers() {
  return db
    .query('SELECT * FROM users')
    .then((result) => console.log(result.rows));
}

function getUsersProductOrder() {
  // return db.query("SELECT * FROM users").then((result) => result.rows);

  return db
    .query(
      'SELECT * FROM products INNER JOIN products_category ON products.category_id = products_category.id ORDER BY products.category_id DESC;'
    )
    .then((result) => console.log(result.rows));
}

module.exports = { getUsers, getUsersProductOrder };
