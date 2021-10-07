'use strict';

function html(productList, productCategorys, users) {
  const HTML = `
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=#, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>eBargain 🛒</title>

</head>

<body>
    <header class="margin-top-2rem">
        <h1><img src="logo.png" alt="eBargain Logo" width="200vw"></h1>
    </header>
    <section class="flex flex--column margin-top-2rem">

        <form method="post" action="/">

           
                <label for="users">
                    <h2>Seller</h2>
                    <select name="users" id="users">
         ${users}
                    </select>
                </label>
        
                <label for="product_name">
                    <h2>Product Name</h2>
                    <input type="text" placeholder="Enter product name" name="product_name" id="product_name">
                </label>
         
                <label for="product_description">
                    <h2>Product description</h2>
                    <input type="text" placeholder="Enter product description" name="product_description"
                        id="product_description">
                </label>
      
                <label for="product_price">
                    <h2>Product price</h2>
                    <input type="numeric" placeholder="Enter Product price" name="product_price" id="product_price">
                </label>
        
                <label for="product_category">
                    <h2>Category</h2>
                    <select name="product_category" id="product_category">
            ${productCategorys}
                    </select>
                </label>
            <button class="box__button margin-top-1rem">SUBMIT PRODUCT</button>
        </form>
    </section>

    <section class="flex flex--column margin-top-2rem">
        ${productList}
    </section>
</body>

</html>
  `;

  return HTML;
}

module.exports = html;
