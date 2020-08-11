const express = require("express");
const path = require("path");
const productsController = require("../controllers/products");

const router = express.Router();

// implicitly reached through /admin/add-product, this is the get method
router.get("/add-product", productsController.getAddProduct);

// and this is the post request
router.post("/add-product", productsController.postAddProduct);

module.exports = router;
