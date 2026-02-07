import { Router } from "express";
const router = Router();
import validateCart from "../middleware/validateCart";

let cart = [];

router.post("/", validateCart, (req, res) => {
  const { productId, quantity } = req.body;
  const existing = cart.filter((item) => item.productId === productId);
  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.push({ productId, quantity });
  }

  res.json({ message: "Item added", cart });
});

export default router;
