const cart = require("../models/cartModel")
const carts = require('../dal/').db('FinalExam').collection('carts')

const getCartDetails = async(userId) => {

    try{
        const myCart = await carts.find({userId})
        return myCart.toArray();
    }catch(err){
        console.log(err)
        return err;
    }
}

const addToCart = async(data) => {

    const {userId, sellerId, itemName, itemId, itemPrice, itemQuantity} = data;

    try{
        const cartItem = await carts.insertOne({
            userId,
            sellerId,
            itemName,
            itemId,
            itemPrice,
            itemQuantity
        } )

        return cartItem;
    }catch(err){
        console.log(err)
        return err;
    }
}

module.exports = {getCartDetails, addToCart}