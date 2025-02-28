const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
    userId: mongoose.Schema.Types.ObjectId,
    products: [{ productId: mongoose.Schema.Types.ObjectId, quantity: Number }]
});

const Cart = mongoose.model("Cart", cartSchema);

exports.getCart = async (req, res) => {
    try {
        const cart = await Cart.findOne({ userId: req.params.userId });
        res.json(cart);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
