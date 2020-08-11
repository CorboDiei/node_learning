const express = require("express");
const path = require("path");
const rootDir = require("../util/path");
const { finished } = require("stream");

const router = express.Router();

const products = [];

// implicitly reached through /admin/add-product, this is the get method
router.get("/add-product", (req, res, next) => {
  // sending a response
  res.render("add-product", {
    title: "Add Product",
    path: "/admin/add-product",
  });
});

// and this is the post request
router.post("/add-product", (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect("/");
});

exports.router = router;
exports.products = products;
