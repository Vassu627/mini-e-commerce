import Cart from "../models/Cart.js";

const addToCart = async (req, res, next) => {
  try {
    const { productId, quantity } = req.body;
    let item = await Cart.findOne({ productId });
    if (item) {
      item.quantity += quantity;
      await item.save();
    } else {
      item = await Cart.create({ productId, quantity });
    }
    res.json(item);
  } catch (err) {
    next(err);
  }
};

const getCart = async (req, res, next) => {
  try {
    const cart = Cart.find().populate("productId");
    res.json(cart);
  } catch (err) {
    next(err);
  }
};

export default {
  getCart,
  addToCart,
};
