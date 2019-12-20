const mongoose = require('mongoose');

const PokeSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    image:{
        type: String,
        required: true,
    },
    createdAt:{
        type: Date,
        default: Date.now,
    },
});

mongoose.model('PokeModel', PokeSchema);
