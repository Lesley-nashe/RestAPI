import express from 'express'

import { getProduct, getAllProducts, create_Product, deleteProduct, updateProduct} from '../controllers/products'
import { isAuthenticated, isOwner } from '../middleware';


export default (router: express.Router) => {
    router.post('/product', isAuthenticated, create_Product )
    router.get('/products', isAuthenticated, getAllProducts);
    router.get('/product/:id', isAuthenticated, getProduct)
    router.delete('/products/:id', isAuthenticated, deleteProduct);
    router.patch('/products/:id', isAuthenticated, updateProduct);
};