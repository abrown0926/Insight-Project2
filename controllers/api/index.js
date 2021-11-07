// see activity 18 - cookies for content of this file
const router = require("express").Router();

const userRoutes = require("./userRoutes");
const wishlistRoutes = require("./wishlistRoutes");

router.use("/users", userRoutes);
// the line below is causing an error when node server.js is run... leaving out for nowS
//router.use("/wishlist", wishlistRoutes);

module.exports = router;
