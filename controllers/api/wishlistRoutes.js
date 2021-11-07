const router = require("express").Router();
const { User, Wishlist } = require("../../models");
const withAuth = require("../../utils/auth");

// code below is only accessible by Santa to see all kids' wishlists
// router.get("/", withAuth, async (req, res) => {
//   // find all wishlists
//   Wishlist.findAll({
//     include: [{ model: User, model: Wishlist }],
//   }).then((wishlistData) => {
//     res.json(wishlistData);
//     console.log(wishlistData);
//   });
//   // be sure to include its associated data from other routes/tables
// });

// individual users can only see the wishlist associated with their id
router.get("/:id", withAuth, async (req, res) => {
  // find a single wishlist by its `id`
  try {
    Wishlist.findOne({
      where: { id: req.params.id },
      include: [
        { model: User, attributes: { exclude: ["email", "password"] } },
      ],
    }).then((wishlistData) => {
      res.render("wishlist", {
        users,
        logged_in: req.session.logged_in,
      });
      res.render("wishlist", { text: "Hello" }); //insert user's first name as part of the greeting
      console.log(wishlistData);
    });
  } catch (err) {
    res.status(500).json(err);
  }
  res.json(wishlistData);
  console.log(wishlistData);
});

router.post("/", async (req, res) => {
  try {
    const newWishlist = await Wishlist.create({
      contents: req.body.contents,
      creator: req.body.creator,
      date: req.body.date,
    });
  } catch (err) {
    console.log(err);
  }
  console.log(newWishlist);
});
// update wishlist
router.put("/:id", (req, res) => {
  Wishlist.update(
    {
      wishlist_title: req.body.wishlist_title,
      contents: req.body.contents,
      creator: req.body.creator,
      date: req.body.date,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    // async await try/catch
    .catch((err) => {
      // console.log(err);
      console.log(err);
      res.status(400).json(err);
    });
});
