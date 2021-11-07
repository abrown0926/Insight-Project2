// see activity 18 - cookies for content of this file
const router = require("express").Router();

const userRoutes = require("./userRoutes");
<<<<<<< HEAD
const wishlistRoutes = require("./wishlistRoutes");
=======

const commentRoutes = require("./wishlistRoutes");
>>>>>>> d582a523fee02fda1b9584ae4665e51fa4ba4f43


router.use("/users", userRoutes);
router.use("/wishlist", wishlistRoutes);

module.exports = router;
