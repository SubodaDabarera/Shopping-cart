const mongoose = require('mongoose')
const {Schema} = mongoose;

const itemSchema = new Schema({
        name: {
        type: String,
        require: true  
        },
        sellerId: {
            type: String,
            require: true  
        },
        price: {
            type: Number,
            require: true  
        },
        quantity: {
            type: Number,
            require: true  
        },
    }, 
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Item', itemSchema)