import express from 'express'

import { getOrder, getAllUserOrders, getAllOrders, placeOrder, deleteOrder, updateOrder} from '../controllers/orders'
import { isAuthenticated} from '../middleware';


export default (router: express.Router) => {
    router.post('/orders', isAuthenticated, placeOrder )
    router.get('/orders', isAuthenticated, getAllUserOrders);
    router.get('/order', isAuthenticated, getOrder)
    router.delete('/orders/:id', isAuthenticated, deleteOrder);
    router.patch('/orders/:id', isAuthenticated, updateOrder);
};