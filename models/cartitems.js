"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class CartItems extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      CartItems.belongsTo(models.Cart, {
        foreignKey: "cartid",
        onDelete: "CASCADE",
      });
      CartItems.hasMany(models.EcommerceProduct, {
        foreignKey: "productid",
        as: "CartItems",
      });
    }
  }
  CartItems.init(
    {
      quantity: DataTypes.INTEGER,
      productid: DataTypes.INTEGER,
      cartid: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "CartItems",
    }
  );
  return CartItems;
};
