const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Wishlist extends Model {
  //   checkPassword(loginPw) {
  //     return bcrypt.compareSync(loginPw, this.password);
  //   }
}

Wishlist.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    contents: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    nice_status: {
      type: DataTypes.BOOLEAN,
    },
    // users_id: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: "user",
    //     key: "id",
    //   },
    // },
  },
  {
    //     hooks: {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "wishlist",
    //     },
  }
);

module.exports = Wishlist;
