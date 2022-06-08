"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class UserAddress extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      UserAddress.belongsTo(models.ProductUser, {
        foreignKey: "userid",
        onDelete: "CASCADE",
      });
      UserAddress.hasMany(models.Order, {
        foreignKey: "useraddressid",
        as: "UserAdresses",
      });
    }
  }
  UserAddress.init(
    {
      city: DataTypes.STRING,
      state: DataTypes.STRING,
      country: DataTypes.STRING,
      userid: DataTypes.INTEGER,
      postalcode: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "UserAddress",
    }
  );
  return UserAddress;
};
