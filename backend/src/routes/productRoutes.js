import express from "express";
const router = express.Router();
import controller from "../controllers/productController.js";

router.get("/", controller.getProducts);
router.post("/", controller.createProduct);
router.put("/", controller.updateProduct);
router.delete("/", controller.deleteProduct);

export default router;
