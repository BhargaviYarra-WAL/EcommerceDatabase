"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class OrderItems extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      OrderItems.belongsTo(models.Order, {
        foreignKey: "orderid",
        onDelete: "CASCADE",
      });
      OrderItems.belongsTo(models.EcommerceProduct, {
        foreignKey: "productid",
        onDelete: "CASCADE",
      });
      OrderItems.hasOne(models.Delivery, {
        foreignKey: "deliveryid",
        as: "OrderItems",
      });
      OrderItems.hasOne(models.Return, {
        foreignKey: "orderitemsid",
        as: "OrderItems",
      });
    }
  }
  OrderItems.init(
    {
      orderid: DataTypes.INTEGER,
      productid: DataTypes.INTEGER,
      deliveryid: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "OrderItems",
    }
  );
  return OrderItems;
};
