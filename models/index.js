const User = require("./User");
const Wishlist = require("./Wishlist");
Wishlist.belongsTo(User);
User.hasOne(Wishlist);
module.exports = { User, Wishlist };
