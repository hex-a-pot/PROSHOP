import express from 'express'
import fetchProduct from '../Controllers/fetchProduct.js'
import fetchProducts from '../Controllers/fetchProducts.js';

const Router = express.Router();


//@DESC -   Fetch product by Id
//@route -   GET /api/product/:id
//@access -  public
const getProduct = Router.get('/api/product/:id',fetchProduct);


//@DESC -   Fetch all products
//@route -   GET /api/products
//@access -  public
const getProducts = Router.get('/api/products',fetchProducts)




export default Router;