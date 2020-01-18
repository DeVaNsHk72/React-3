const categoriesRoutes = require('./categories');
const productsRoutes = require('./products');



const appRouter = (app, fs) => {

    // we've added in a default route here that handles empty routes
    // at the base API url
    // run our user route module here to complete the wire up
    categoriesRoutes(app, fs);
    productsRoutes(app, fs);
};
    

// this line is unchanged
module.exports = appRouter;