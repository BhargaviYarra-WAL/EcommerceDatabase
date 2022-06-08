"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Order.belongsTo(models.ProductUser, {
        foreignKey: "userid",
        onDelete: "CASCADE",
      });

      Order.belongsTo(models.UserAddress, {
        foreignKey: "useraddressid",
        onDelete: "CASCADE",
      });
      Order.hasMany(models.OrderItems, {
        foreignKey: "orderid",
        as: "Orders",
      });
      Order.hasOne(models.Payment, {
        foreignKey: "paymentid",
        as: "Orders",
      });
      Order.hasOne(models.Status, {
        foreignKey: "statusid",
        as: "Orders",
      });
    }
  }
  Order.init(
    {
      userid: DataTypes.INTEGER,
      useradressid: DataTypes.INTEGER,
      totalamount: DataTypes.INTEGER,
      paymentid: DataTypes.INTEGER,
      statusid: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Order",
    }
  );
  return Order;
};
