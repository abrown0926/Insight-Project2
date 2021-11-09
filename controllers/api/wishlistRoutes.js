// route responsible for working with data, then sending data back to the rendered page
const router = require("express").Router();
const { User, Wishlist } = require("../../models");
router.get("/test", async (req, res) => {
  res.status(200).json("Test complete");
});

// New wishlist
router.post("/newWishlist", async (req, res) => {
  const wishlistData = await User.findOne({
    where: { user_id: req.body.id },
  });

  if (!wishlistData) {
    res
      .status(400)
      .json({ message: "Incorrect email, please enter valid email!" });
    res.render("home");
    return;
  }

  try {
    const newWishlist = await Wishlist.create({
      title: req.body.title,
      content: req.body.content,
      user_id: postData.id,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Edit wishlist by id
router.put("/:id", async (req, res) => {
  try {
    const wislistData = await Wishlist.update(
      {
        title: req.body.title,
        content: req.body.content,
        user_id: req.body.user_id,
      },
      { where: { id: req.params.id } }
    );

    if (!wishlistData) {
      res.status(404).json({ message: "No wishlist found with this id." });
    } else {
      res.status(200).json(wishlistData);
    }
  } catch (err) {
    res.status(400).json(err);
  }
});

// Delete wishlist by id
router.delete("/:id", async (req, res) => {
  try {
    const wishlistData = await Wishlist.destroy({
      where: { id: req.params.id },
    });

    if (!wishlistData) {
      res.status(404).json({ message: "No wishlist found with this id!" });
    } else {
      res.status(200).json(wishlistData);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
