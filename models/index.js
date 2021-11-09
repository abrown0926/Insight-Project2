const User = require("./User");
const Wishlist = require("./Wishlist");

User.hasOne(Wishlist, {
  // User has one:many relationship to BlogPost. One user can have many blog posts
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Wishlist.belongsTo(User, {
  // Wishlist has many:one relationship to User. Many wishlist posts can belong to one user.
  foreignKey: "user_id",
});

module.exports = { User, Wishlist };
