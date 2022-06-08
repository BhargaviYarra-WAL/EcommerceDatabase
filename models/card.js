"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Card extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Card.belongsTo(models.ProductUser, {
        foreignKey: "userid",
        onDelete: "CASCADE",
      });
    }
  }
  Card.init(
    {
      userid: DataTypes.INTEGER,
      cardnum: DataTypes.INTEGER,
      cvv: DataTypes.INTEGER,
      cardholder_name: DataTypes.STRING,
      expirydate: DataTypes.DATE,
      cardtype: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Card",
    }
  );
  return Card;
};
