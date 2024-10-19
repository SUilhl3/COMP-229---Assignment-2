const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        description:{
            type: String,
            required: true
        },
        price: {
            type: Number,
            require: true    
        },
        quantity: {
            type: Number,
            required: true
        },
        category:{
            type: String,
            require: true
        }

    }
);
module.exports = mongoose.model('startingpoint', projectSchema);