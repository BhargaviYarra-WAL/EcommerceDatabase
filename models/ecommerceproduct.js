"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class EcommerceProduct extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      EcommerceProduct.belongsTo(models.ProductCategory, {
        foreignKey: "categoryid",
        onDelete: "CASCADE",
      });
      EcommerceProduct.belongsTo(models.Merchant, {
        foreignKey: "merchantid",
        onDelete: "CASCADE",
      });
      EcommerceProduct.belongsTo(models.CartItems, {
        foreignKey: "productid",
        onDelete: "CASCADE",
      });

      EcommerceProduct.hasMany(models.ProductImage, {
        foreignKey: "productid",
        as: "EcommerceProducts",
      });
      EcommerceProduct.hasMany(models.OrderItems, {
        foreignKey: "productid",
        as: "EcommerceProducts",
      });
    }
  }
  EcommerceProduct.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      price: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER,
      categoryid: DataTypes.INTEGER,
      merchantid: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "EcommerceProduct",
    }
  );
  return EcommerceProduct;
};
