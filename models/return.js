"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Return extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Return.belongsTo(models.OrderItems, {
        foreignKey: "orderitemsid",
        onDelete: "CASCADE",
      });
    }
  }
  Return.init(
    {
      orderitemsid: DataTypes.INTEGER,
      reason: DataTypes.STRING,
      type: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Return",
    }
  );
  return Return;
};
