const express = require("express");
const path = require("path");
const rootDir = require("../util/path");
const { finished } = require("stream");

const router = express.Router();

// implicitly reached through /admin/add-product, this is the get method
router.get("/add-product", (req, res, next) => {
  // sending a response
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
});

// and this is the post request
router.post("/add-product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
