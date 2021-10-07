'use strict';

const { parseInt } = require('lodash');
const model = require('../database/model.js');
const html = require('../routes/html.js');

function get(request, response) {
  // const users = model.getUsers();
  const productOrder = model.getProductOrder(); /// it works
  const productCategorys = model.getCategorys();
  const users = model.getUsers();

  Promise.all([productOrder, productCategorys, users])
    .then((values) => {
      const productList = values[0]
        .map((product) => {
          return `
                  <article class="flex flex--column border padding-2rem background--grey margin-top-2rem">
  <div
    class="
            flex
            flex--row
            flex--justify-space-between
            flex--align-items-center
          "
  >
    <div class="flex flex--row flex--align-items-center">
      <h2>${product.product_name}</h2>
    </div>
    <span>£ ${product.product_price}</span>
    <span>${product.category_name}</span>
    <span>${product.username}</span>
  </div>
  <div class="flex flex--row flex--justify-space-between">
    <p class="padding-top-bottom-1rem ">${product.product_description}</p>
  </div>
</article>`;
        })
        .join('');

      const productCategorysList = values[1]
        .map((category) => {
          return `<option value="${category.id}">${category.category_name}</option>`;
        })
        .join('');

      const userList = values[2]
        .map((user) => {
          return `<option value="${user.id}">${user.username}</option>`;
        })
        .join('');

      return html(productList, productCategorysList, userList);
    })
    .then((compiledHTML) => response.send(compiledHTML))
    .catch((error) => {
      console.error('error', error);
      response.status(404).send('😕 Error: Something went wrong 🛒' + error);
    });
}

function post(request, response) {
  const body = request.body;
  model.createUser(body.new_user); /// it works
  model.createProduct(
    body.product_name,
    body.product_description,
    body.product_price,
    body.users,
    body.product_category
  );
  response.redirect('/');
}

module.exports = { get, post };
