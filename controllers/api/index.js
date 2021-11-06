// see activity 18 - cookies for content of this file
const router = require("express").Router();

const userRoutes = require("./userRoutes");
const commentRoutes = require("./wishlistRoutes");

router.use("/users", userRoutes);

module.exports = router;
