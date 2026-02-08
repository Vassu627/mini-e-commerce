import express from "express";
const router = express.Router();
import controller from "../controllers/cartController.js";

router.get("/", controller.getCart);
router.post("/", controller.addToCart);
router.put("/:id", controller.updateCartItem);
router.delete("/:id", controller.removeFromCart);

export default router;
