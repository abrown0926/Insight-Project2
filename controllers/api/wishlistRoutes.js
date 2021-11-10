const router = require("express").Router();
const { User, Wishlist } = require("../../models");
const withAuth = require("../../utils/auth");

// individual users can only see the wishlist associated with their id
router.get("/:user_id", withAuth, async (req, res) => {
  // find a single wishlist by its `id`
  try {
    res.json(
      await Wishlist.findAll({
        where: { user_id: req.params.user_id },
        include: [
          { model: User, attributes: { exclude: ["email", "password"] } },
        ],
      })
    );
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/", async (req, res) => {
  const { contents, user_id, date } = req.body;
  try {
    const newWishlist = await Wishlist.create({
      contents,
      user_id,
      date,
    });

    res.json(newWishlist);
  } catch (err) {
    console.log(err);
  res.json(err)
  }
});

// remove all (only for tsting)
// Delete post by id
router.get("/delete/:id", async (req, res) => {
  await Wishlist.destroy({
    where: { id: req.params.id },
  });
  res.json({});
});
// router.get("/delete/:id", (req, res) => {
//   id = req.params.id;
//   // Wishlist.findAndDestroy(id);
//   Wishlist.find(id).on("success", function (el) {
//     el.destroy();
//   });
//   res.json({});
// });

// update wishlist
router.put("/:id", async (req, res) => {
  try {
    const wishlist = await Wishlist.update(
      {
        contents: req.body.contents,
        date: req.body.date,
        nice_status: req.body.nice_status,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json(wishlist);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
