const express = require("express");
const router = express.Router();
const {
  getProducts,
  getProductById,
} = require("../controller/productControllers");


//@desc GET all products from mongodb
//@route GET / api/products
router.get("/", getProducts);

//@desc GET a product by id from mongodb
//@route GET / api/products/:id
router.get("/:id", getProductById);

module.exports = router;