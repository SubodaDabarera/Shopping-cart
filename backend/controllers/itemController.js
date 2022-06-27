const { ObjectId } = require('mongodb');
const Item = require('../models/itemModel')
const items = require('../dal/').db('FinalExam').collection('items');

const viewItems = async() => {
    console.log("called")
    try{
        const results = await items.find()
        return results.toArray();
    }
    catch(err){
        console.error(err)
        return err;
    } 
}

const addItems = async(data) => {
    const {sellerId, name, price, quantity} = data;
    try{
        const result = await items.insertOne({
            sellerId,
            name,
            price,
            quantity
        })
        return result;

    }catch(err){
        console.log("Error")
        console.error(err)
        return err;
    }
}

const ChangeItems = async(data) => {
    const {itemId, sellerId, name, price, quantity} = data;

    try{
        const updated = await items.replaceOne( {_id: ObjectId(itemId)}, {sellerId: sellerId, name: name, price: price, quantity: quantity})
        return updated;
    }catch(err){
        console.error(err)
        return err;
    }
}

const getFarmerItems = async(data) => {
    const sellerId = data.sellerId;

    try{
        const getFarmerItems = await items.find({sellerId: sellerId})
        return getFarmerItems.toArray();
    }catch(err){
        console.log(err)
        return err;
    }
}

module.exports = {viewItems, addItems, ChangeItems, getFarmerItems}