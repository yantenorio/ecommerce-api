const { Router } = require('express');

const routes = Router();

const userController = require('../controllers/user/UserController');
const sessionController = require('../controllers/login');
const productController = require('../controllers/product/productController');
const cartController = require('../controllers/CartController');

const { authenticate } = require('../middlewares')

routes.get('/', (req, res) => {
    res.json({message: 'hello world'})
});

routes.post('/users',userController.createUser);
routes.get('/users', userController.getUsers);


routes.get('/users/:user_id',userController.getUserById);

routes.post('/sessions', sessionController.createSession);

routes.post('/products/:user_id',authenticate ,productController.createProduct);
routes.get('/:user_id/products', productController.getUserProduct);
routes.patch('/products/:user_id/:product_id',authenticate, productController.updateProduct);
routes.delete('/products/:user_id/:product_id',authenticate, productController.deleteProduct);

routes.get('/products', productController.getProducts);
routes.get('/products/:product_id', productController.getProductById);

routes.post('/carts/:user_id', authenticate, cartController.createCart);
routes.get('/carts/:user_id', authenticate, cartController.getUserCart);

routes.get('/carts/:user_id/:cart_id', authenticate, cartController.getCart);

module.exports = routes;