const router = require("express").Router();
const { User, Wishlist } = require("../models");
const withAuth = require("../utils/auth");

//homepage
router.get("/", withAuth, async (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/wishlist");
    return;
  }
  res.render("login");
});

router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/wishlist", async (req, res) => {
  if (req.session.logged_in) {
    try {
      const userData = await User.findOne({
        where: { id: req.session.pk },
        include: [{ model: Wishlist }],
        attributes: { exclude: ["password"] },
      });
      const users = userData.get({ plain: true });
      console.log(users);
      console.log(userData);

      res.render("wishlist", {
        users,
        logged_in: req.session.logged_in,
      });
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.render("login");
  }
});

module.exports = router;
