const router = require("express").Router();
const userRoutes = require("./userRoutes");
const wishlistRoutes = require("./wishlistRoutes");

router.use("/user", userRoutes);
router.use("/wishlist", wishlistRoutes);

module.exports = router;
