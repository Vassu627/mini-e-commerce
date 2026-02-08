import { products } from "../data/store.js";
import { v4 as uuid } from "uuid";

const getProducts = (req, res) => {
  res.json(products);
};

const createProduct = async (req, res, next) => {
  try {
    const { name, price, image } = req.body;

    if (!name || !price || !image) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newProduct = {
      id: uuid(),
      name,
      price: Number(price),
      image,
    };

    products.push(newProduct);
    res.status(201).json(newProduct);
  } catch (err) {
    next(err);
  }
};

const updateProduct = async (req, res, next) => {
  try {
    const product = products.find((p) => p.id === req.params.id);

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    const { id, ...updates } = req.body;
    Object.assign(product, updates);

    res.json(product);
  } catch (err) {
    next(err);
  }
};

const deleteProduct = async (req, res, next) => {
  try {
    const index = products.findIndex((p) => p.id === req.params.id);

    if (index === -1) {
      return res.status(404).json({ error: "Product not found" });
    }

    products.splice(index, 1);
    res.json({ message: "Product deleted" });
  } catch (err) {
    next(err);
  }
};

export default {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
};
