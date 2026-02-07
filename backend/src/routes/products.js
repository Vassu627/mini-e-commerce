const express = require("express");
const router = express.Router();

const products = require("../data/products").default;

router.get("/", (res, req) => {
  res.json(products);
});

module.exports = router;
