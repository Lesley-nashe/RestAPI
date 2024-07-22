import { creatOrder, deleteOrderById, getOrderById, getOrders, getOrdersByUserId } from '../db/orders';
import express from 'express'
import { OrderStatus } from '../helpers';


export const getOrder = async (req: express.Request, res: express.Response) => {
    try {
        const { id } = req.params
        const product = await getOrderById(id);
        return res.status(200).json(product);        
    } catch (error) {
        console.log(error);
        return res.sendStatus(400) 
    }
}

export const getAllUserOrders = async (req: express.Request, res: express.Response) => {
    try {
        const { id } = req.params
        const orders = await getOrdersByUserId(id);
        return res.status(200).json(orders);        
    } catch (error) {
        console.log(error);
        return res.sendStatus(400) 
    }
}



export const getAllOrders = async (req: express.Request, res: express.Response) => {
    try {
        const orders = await getOrders();
        return res.status(200).json(orders);        
    } catch (error) {
        console.log(error);
        return res.sendStatus(400) 
    }
}

export const placeOrder = async (req: express.Request, res: express.Response) =>{
    try{
        const {price, userId, products } = req.body;
        if(!price || !userId || !products) return res.sendStatus(400);
        const order = await creatOrder({
            userId,
            price,
            products,
            status: OrderStatus.Placed
        });
        return res.status(200).json(order).end();
    } catch(error){
        console.log(error)
        return res.sendStatus(400)
    }
}

export const deleteOrder = async (req: express.Request, res: express.Response) => {
    try {
        const { id } = req.params;
        const deleteOrder = await deleteOrderById(id);
        return res.json(deleteOrder);
    } catch (error) {
        console.log(error);
        return res.sendStatus(400)
        
    }
}

export const updateOrder = async (req: express.Request, res: express.Response) => {
    try {
        const { id } = req.params;
        const { Status } = req.body;
        const order = await getOrderById(id);
        order.status = Status;
        await order.save();
        return res.status(200).json(order);
    } catch (error) {
        console.log(error);
        return res.sendStatus(400)
    }
}