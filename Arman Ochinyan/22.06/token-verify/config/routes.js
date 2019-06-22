const product = require('../app/controllers/products');

const auth = require('../app/controllers/auth');

const authMiddlewere = require('../app/middlewhere/auth');


module.exports = (app) => {
	//products
	app.get('/', product.get1);
//authMiddlewere=>
	app.get('/products',authMiddlewere, product.getAll );

	app.post('/products',authMiddlewere,product.create );

	app.put('/products/:id',product.update );

	app.delete('/products/:id',product.remove );

	//auth

	app.post('/signin',auth.signIn);
};