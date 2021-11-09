// resposnible for rendering pages depending on the url visited in the browser
const router = require("express").Router();
const { User, Wishlist } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", withAuth, async (req, res) => {
  try {
    // const userData = await User.findByPk({
    //   where: { id: req.session.pk },
    //   include: [{ model: Wishlist }],
    //   attributes: { exclude: ["password"] },
    // });

    // const users = userData.get({ plain: true });
    const users = {
      id: 1,
      username: "tony",
      email: "tony@email.com",
      password: "12345678",
    };
    console.log(users);

    res.render("wishlist", {
      users,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  // if (req.session.logged_in) {
  //   res.redirect("/");
  //   return;
  // }

  // res.render("login");
  res.render("wishlist");
});

router.get("/wishlist", (req, res) => {
  // let someData;
  // https
  //   .get("api/wishlist/test")
  //   .then((v) => {
  //     someData = v;
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
  // res.render("wishlist", { someData });
});

module.exports = router;
