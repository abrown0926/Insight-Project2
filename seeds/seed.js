// boilerplate
const sequelize = require("../config/connection");
const { User, Wishlist } = require("../models");

const userData = require("./userData.json");
const wishlistData = require("./wishlistData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Wishlist.create(wishlistData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
