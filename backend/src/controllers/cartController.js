import { cart } from "../data/store.js";

const addToCart = async (req, res, next) => {
  try {
    const { productId, quantity } = req.body;

    if (!productId || !quantity) {
      return res.status(400).json({
        error: "productId and quantity required",
      });
    }

    const existing = cart.find((i) => i.productId === productId);

    if (existing) {
      existing.quantity += quantity;
    } else {
      cart.push({ productId, quantity });
    }

    res.json(cart);
  } catch (err) {
    next(err);
  }
};

const getCart = async (req, res) => {
  res.json(cart);
};

export default {
  getCart,
  addToCart,
};
