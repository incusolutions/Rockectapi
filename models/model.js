const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    description: {
        required: true,
        type: String
    },
    sku: {
        required: true,
        type: Number
    },
    imagen: {
        required: true,
        type: String
    },
    type: {
        required: true,
        type: String
    },
    price: {
        required: true,
        type: Number
    }
}, { collection : 'Products', versionKey: false  })

module.exports = mongoose.model('Products', dataSchema)

