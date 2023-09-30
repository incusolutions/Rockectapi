const mongoose = require('mongoose');

const dataSchemalogs = new mongoose.Schema({
    date: {
        required: true,
        type: Date
    },
    product_id: {
        required: true,
        type: String
    },
    productname: {
        required: true,
        type: String
    },
    newprice: {
        required: true,
        type: Number
    },
    oldprice: {
        required: true,
        type: Number
    },
    newsku: {
        required: true,
        type: Number
    },
    oldsku: {
        required: true,
        type: Number
    }
}, { collection : 'logs', versionKey: false  })

module.exports = mongoose.model('logs', dataSchemalogs)

