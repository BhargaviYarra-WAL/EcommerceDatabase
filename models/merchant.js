"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Merchant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Merchant.hasMany(models.EcommerceProduct, {
        foreignKey: "merchantid",
        as: "Merchants",
      });
      Merchant.belongsToMany(ProductCategory, {
        through: "MerchantCategory",
        as: "ProductCategories",
        foreignKey: "merchantid",
      });
    }
  }
  Merchant.init(
    {
      username: DataTypes.STRING,
      password: DataTypes.STRING,
      address: DataTypes.STRING,
      mobile: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Merchant",
    }
  );
  return Merchant;
};
