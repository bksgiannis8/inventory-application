const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    product_name: {type: String, required:true, maxLength: 100},
    producer: {type: String,.........................},
    category: {type: String, ..............},
    stock: {type: Int32Array, required: true, maxLength:100},
    price: {type: Float32Array, required: true, maxLength:100},
    production_date: {type: Date, required: true, maxLength:100},
    expiration_date: {type: Date, required: true, maxLength:100},
    description: {type: String, required: true, maxLength:1000},
})

ProductSchema.virtual('url').get(function () {
    return `/.........../product/${this.id}`;
});

module.exports = mongoose.model("Product", ProductSchema);