const mongoose = require('mongoose')
const {Schema} = mongoose

const cartSchema = new Schema({
        userId: {
            type: String,
            require: true
        },
        sellerId: {
            type: String,
            default: 'Seller'
        }, 
        itemName: {
            type: String,
        },
        itemId: {
            type: String
        },
        itemPrice: {
            type: Number
        },
        itemQuantity: {
            type: Number
        }
    }, 
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Cart', cartSchema);