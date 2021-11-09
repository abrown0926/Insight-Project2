// see activity 18 and 20 /api/user-routes for more content of this file
const router = require("express").Router();
const bcrypt = require("bcrypt");
const { User } = require("../../models");

//create new user
router.post("/create", async (req, res) => {
  try {
    const dbUserData = await User.findOne({
      where: {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
      },
    });
    if (!dbUserData) {
      const newUser = await User.create({
        username: req.body.username,
        // line below may need to be in its own if/else statement
        email: req.body.email,
        password: req.body.password,
      });
      console.log(newUser);
      if (newUser) {
        req.session.save(() => {
          req.session.logged_in = true;
          req.session.username = newUser.username;
          req.session.email = newUser.email;
          req.session.password = newUser.password;
          res.status(200).json({ message: "User created!" });
        });
        res.status(200).json(newUser);
      }
    } else {
      res
        .status(409)
        .json({ message: "Username and email taken! Please use another." });
      return;
    }
  } catch (err) {
    console.log(err);
  }
});

// Login
router.post("/login", async (req, res) => {
  try {
    const dbUserData = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!dbUserData) {
      res
        .status(400)
        .json({ message: "Incorrect email or password. Please try again!" });
      return;
    }

    const validPassword = await dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password. Please try again!" });
      return;
    }

    req.session.save(() => {
      req.session.loggedIn = true;

      res
        .status(200)
        .json({ user: dbUserData, message: "You are now logged in!" });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Logout
router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
