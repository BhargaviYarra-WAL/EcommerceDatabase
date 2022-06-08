"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ProductUser extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ProductUser.hasMany(models.Order, {
        foreignKey: "userid",
        as: "ProductUsers",
      });

      ProductUser.hasMany(models.UserAddress, {
        foreignKey: "userid",
        as: "ProductUsers",
      });
      ProductUser.hasOne(models.Cart, {
        foreignKey: "userid",
        as: "ProductUsers",
      });
      ProductUser.hasMany(models.Card, {
        foreignKey: "userid",
        as: "ProductUsers",
      });
    }
  }
  ProductUser.init(
    {
      username: DataTypes.STRING,
      password: DataTypes.STRING,
      mobile: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "ProductUser",
    }
  );
  return ProductUser;
};
