const { default: mongoose } = require("mongoose");

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    stock: {
        type: Number,
        default: 0
    },
    images: [String]
}, {
    timestamps: true
})

module.exports = mongoose.model('Product', ProductSchema);