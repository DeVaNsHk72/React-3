const productsRoutes = (app, fs) => {

  // variables

  const productJson = require('./../src/data/products.json');
  console.log(productJson)
  const categoryJson = require('./../src/data/categories.json');
  console.log(categoryJson)
var finalProducts = productJson.products.map((product) => {
  product.categoryName = productJson.products.map
   return product;
})
console.log(finalProducts);
  // READ
  app.get('/products/all', (req, res) => {
    res.json(finalProducts);
});
      app.get('/product/:id', (req, res) => {
          const productId = req.params.id;
          finalProducts.find (product => product.id === productId)
          const getCategory = categoryJson.categories.find(category => productToReturn.categoryId === category.id)
          productToReturn.categoryName = getCategory.categoryName
          console.log(getCategory)
          if (!productToReturn) {
            res.status(500).send('Product not found.')
          } else {
            res.json(productToReturn);
          }
          
        });
  };




module.exports = productsRoutes;
