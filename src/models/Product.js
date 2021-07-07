const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    username: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    productName: {
        type: String,
        required: true
    },
    productDescription: {
        type: String
    },
    productPrice: {
        type: Number,
        required: true
    },
    productQuantity: {
        type: Number,
        required:true
    },
    productImage: {
        type: String
    }
});

module.exports = mongoose.model('Product',Schema);