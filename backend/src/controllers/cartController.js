import { cart, products } from "../data/store.js";

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
  const detailedCart = cart.map((item) => {
    const product = products.find((p) => p.id === item.productId);
    return {
      ...product,
      quantity: item.quantity,
    };
  });

  res.json(detailedCart);
};

const removeFromCart = (req, res) => {
  const index = cart.findIndex((item) => item.productId === req.params.id);

  if (index === -1) {
    return res.status(404).json({ error: "Item not found" });
  }

  cart.splice(index, 1);
  res.json(cart);
};

const updateCartItem = (req, res) => {
  const { quantity } = req.body;

  const item = cart.find((i) => i.productId === req.params.id);

  if (!item) {
    return res.status(404).json({ error: "Item not found" });
  }

  item.quantity = quantity;
  res.json(cart);
};

export default {
  getCart,
  addToCart,
  updateCartItem,
  removeFromCart,
};
