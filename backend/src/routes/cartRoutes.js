import express from "express";
const router = express.Router();
import controller from "../controllers/cartController.js";

router.get("/", controller.getCart);
router.post("/", controller.addToCart);

export default router;
