const categoriesRoutes = (app, fs) => {

    // variables
    const productJson = require('./../src/data/products.json');
    console.log(productJson)
    const categoryJson = require('./../src/data/categories.json')
    console.log(categoryJson)
        
        app.get('/category/:ctyId', (req, res) => {
            const categoryId = req.params.ctyId;
            const getproduct = productJson.products.filter (product => product.categoryId === categoryId);
            
            if (!getproduct) {
              res.status(500).send('Product not found.')
            } else {
              res.json(getproduct);
            }
            
          });
    
    
    };


module.exports = categoriesRoutes;