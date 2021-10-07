'use strict';

const model = require('../database/model.js');

function get(request, response) {
  const usersList = model.getUsers();
  const productOrderList = model.getProductOrder();

  Promise.all([usersList, productOrderList]).then((values) =>
    console.log('Promise all data', values)
  );
}

// function get(request, response) {
//     getUsers().then((users) => {
//       const userList = users.map((user) => {
//         return /*html*/ `
//         <li>
//           <span>${user.username}</span>
//           <form action="/users/delete/" method="POST" class="inline">
//             <button name="id" value="${user.id}" aria-label="Delete ${user.username}">
//               &times;
//             </button>
//           </form>
//         </li>
//       `;
//       });
//       const html = layout(
//         "Users",
//         /*html*/ `
//         <h2>Users</h2>
//         <ul>${userList.join("")}</ul>
//         <a href="/users/create">New user +</a>
//       `
//       );
//       response.send(html);
//     });
//   }

module.exports = { get };
