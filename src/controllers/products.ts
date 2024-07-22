import express from 'express'
import { createProduct, deleteProductById, getProductById, getProducts, getProductsByName } from '../db/products'

export const getProduct = async (req: express.Request, res: express.Response) => {
    try {
        const { id } = req.params
        const product = await getProductById(id);
        return res.status(200).json(product);        
    } catch (error) {
        console.log(error);
        return res.sendStatus(400) 
    }
} 

export const getAllProducts= async (req: express.Request, res: express.Response) => {
    try {
        const products = await getProducts();
        return res.status(200).json(products);        
    } catch (error) {
        console.log(error);
        return res.sendStatus(400) 
    }
}

export const create_Product = async (req: express.Request, res: express.Response) =>{
    try{
        const {name, description, price, inventoryCount } = req.body;
        if(!name || !description || !price || !inventoryCount) return res.sendStatus(400);
        const existingProduct = await getProductsByName(name)
        if(existingProduct) return res.sendStatus(400);
        const product = await createProduct({
            name,
            description,
            price,
            inventoryCount
        });
        return res.status(200).json(product).end();
    } catch(error){
        console.log(error)
        return res.sendStatus(400)
    }
}

export const deleteProduct = async (req: express.Request, res: express.Response) => {
    try {
        const { id } = req.params;
        const deleteProduct = await deleteProductById(id);
        return res.json(deleteProduct);
    } catch (error) {
        console.log(error);
        return res.sendStatus(400)
        
    }
}

export const updateProduct = async (req: express.Request, res: express.Response) => {
    try {
        const { id } = req.params;
        const { price, inventoryCount } = req.body;
        const product = await getProductById(id);
        product.price = price;
        product.inventoryCount = inventoryCount;
        await product.save();
        return res.status(200).json(product);
    } catch (error) {
        console.log(error);
        return res.sendStatus(400)
    }
}