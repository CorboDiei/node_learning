const Product = require("../models/product");

exports.getAddProduct = (req, res, next) => {
    // sending a response
    res.render("add-product", {
        title: "Add Product",
        path: "/admin/add-product",
        formsCSS: true,
        productCSS: true,
        activeAddProduct: true,
    });
};

exports.postAddProduct = (req, res, next) => {
    const product = new Product(req.body.title);
    product.save();
    //   products.push({ title: req.body.title });
    res.redirect("/");
};

exports.getProducts = (req, res, next) => {
    Product.fetchAll((products) => {
        res.render("shop", {
            prods: products,
            title: "Shop",
            path: "/shop",
            hasProducts: products.length > 0,
            acticeShop: true,
            productCSS: true,
        });
    });
    // res.sendFile(path.join(rootDir, "views", "shop.html"));
};
