import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
    price: {type: Number, required: true},
    userId: {type: String, required: true},
    products: [{
        productName: {type: String, required: true},
        Quantity: {type: Number, required: true},
    }],
    status: {type: String, required: true}
})

export const OrderModel  = mongoose.model('Order', OrderSchema);

export const getOrders = () => OrderModel.find();

export const getOrdersByUserId  = (userId: string) => OrderModel.find({userId});

export const getOrderById = (Id: string) => OrderModel.findById(Id);

export const creatOrder = (values: Record<string, any>) => new OrderModel(values).save().then((order) => order.toObject());

export const deleteOrderById = (id: string) => OrderModel.findByIdAndDelete({ _id: id});

export const updateOrder = (id: string, values: Record<string, any> ) => OrderModel.findByIdAndUpdate({id, values});