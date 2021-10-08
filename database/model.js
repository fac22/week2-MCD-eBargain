'use strict';

const db = require('./connection.js');

function getUsers() {
  const query = 'SELECT * FROM users';
  return db.query(query).then((result) => result.rows);
}

function getProductOrder() {
  // return db.query("SELECT * FROM users").then((result) => result.rows);
  const query = `SELECT * FROM products 
    INNER JOIN products_category 
    ON products.category_id = products_category.id 
    INNER JOIN users ON products.product_seller = users.id 
    ORDER BY products.id DESC;`;
  return db.query(query).then((result) => result.rows);
}

function getCategorys() {
  const query = 'SELECT * FROM products_category;';
  return db.query(query).then((result) => result.rows);
}

function createUser(username) {
  return db
    .query('INSERT INTO users(username) VALUES($1);', [username])
    .then((result) => result.rows);
}

function createProduct(
  productName,
  productDescription,
  productPrice,
  productSeller,
  categoryID
) {
  console.log(productSeller, 'SELLER ID');
  return db
    .query(
      `INSERT INTO products (product_name, product_description, product_price, product_seller, category_id) VALUES($1, $2, $3, $4, $5)`,
      [productName, productDescription, productPrice, productSeller, categoryID]
    )
    .then((result) => result.row);
}

module.exports = {
  getUsers,
  getProductOrder,
  getCategorys,
  createUser,
  createProduct,
};
