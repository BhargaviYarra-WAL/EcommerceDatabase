"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Cart.belongsTo(models.ProductUser, {
        foreignKey: "userid",
        onDelete: "CASCADE",
      });
      Cart.hasMany(models.CartItems, {
        foreignKey: "cartid",
        as: "Carts",
      });
    }
  }
  Cart.init(
    {
      userid: DataTypes.INTEGER,
      total: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Cart",
    }
  );
  return Cart;
};
