const mongoose = require('mongoose');

const InventorySchema = new mongoose.Schema({
    prodname: String,
    qty: Number,
    category: String,
    brand: String
});

module.exports = mongoose.model('Inventory', InventorySchema);