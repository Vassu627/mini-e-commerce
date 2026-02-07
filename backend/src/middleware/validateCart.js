export default (req, res, next) => {
  const { productId, quantity } = req.body;

  if (!productId || typeof quantity !== "number") {
    return res.status(400).json({
      error: "productId and quantity are required",
    });
  }

  next();
};
