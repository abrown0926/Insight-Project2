// route responsible for working with data, then sending data back to the rendered page
const router = require("express").Router();
const { User, Wishlist } = require("../../models");
// router.get("/test", async (req, res) => {
//   res.status(200).json("Test complete");
// });

// const { Router } = require("express");
// const Todo = require("../models/Todo");
// const router = Router();

// router.get("/", async (req, res) => {
//   const todos = await Todo.find({});

//   res.render("index", {
//     title: "Todos list",
//     isIndex: true,
//     todos,
//   });
// });

// router.get("/create", (req, res) => {
//   res.render("create", {
//     title: "Create todo",
//     isCreate: true,
//   });
// });

// router.post("/create", async (req, res) => {
//   const todo = new Todo({
//     title: req.body.title,
//   });

//   await todo.save();
//   res.redirect("/");
// });

// router.post("/complete", async (req, res) => {
//   const todo = await Todo.findById(req.body.id);

//   todo.completed = !!req.body.completed;
//   await todo.save();

//   res.redirect("/");
// });

// module.exports = router;

// // get all wishlist items in the db
// app.get("/", (req, res) => {
//   repository
//     .findAll()
//     .then((wishlists) => {
//       res.json(wishlists);
//     })
//     .catch((error) => console.log(error));
// });

// // add a wishlist item
// app.post("/", (req, res) => {
//   const { name } = req.body;
//   repository
//     .create(name)
//     .then((wishlist) => {
//       res.json(wishlist);
//     })
//     .catch((error) => console.log(error));
// });

// // delete a wishlist item
// app.delete("/:id", (req, res) => {
//   const { id } = req.params;
//   repository
//     .deleteById(id)
//     .then((ok) => {
//       console.log(ok);
//       console.log(`Deleted wishlist with id: ${id}`);
//       res.status(200).json([]);
//     })
//     .catch((error) => console.log(error));
// });

// // update a wishlist item
// app.put("/:id", (req, res) => {
//   const { id } = req.params;
//   const wishlist = { name: req.body.name, done: req.body.done };
//   repository
//     .updateById(id, wishlist)
//     .then(res.status(200).json([]))
//     .catch((error) => console.log(error));
// });
// module.exports = app;

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
    const wishlistData = await Wishlist.update(
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
