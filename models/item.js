const mongoose = require('mongoose');

var ItemSchema = mongoose.Schema({
    userId: { type: String, required: true },
	username: { type: String, required: true },
    imgUrl: { type: String, required: true },
    price: { type: Number },
    dateAdded: { type: Date }, 
    city: { typle: String },
});

module.exports = mongoose.model('Item', ItemSchema);