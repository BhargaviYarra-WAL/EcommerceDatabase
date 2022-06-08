"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class MerchantCategory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  MerchantCategory.init(
    {
      merchantid: DataTypes.INTEGER,
      categoryid: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "MerchantCategory",
    }
  );
  return MerchantCategory;
};
