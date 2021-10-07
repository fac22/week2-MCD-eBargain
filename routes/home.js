'use strict';

const model = require('../database/model.js');
const html = require('../routes/html.js');

function get(request, response) {
  // const users = model.getUsers();
  const productOrder = model.getProductOrder(); /// it works
  // const productCategorys = model.getCategorys();

  Promise.all([productOrder])
    .then((values) => {
      const productList = values[0]
        .map((product) => {
          return `<li>${product.product_name} - ${product.product_description} - ${product.product_price}</li>`;
        })
        .join('');

      response.send(html(productList));
    })
    .catch((error) => {
      console.error('error', error);
      response.status(404).send('😕 Error: Something went wrong 🛒' + error);
    });
}

module.exports = { get };
