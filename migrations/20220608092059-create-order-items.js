"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("OrderItems", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      orderid: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "Orders",
          key: "id",
          as: "orderid",
        },
      },
      productid: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "EcommerceProducts",
          key: "id",
          as: "productid",
        },
      },

      deliveryid: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "Deliveries",
          key: "id",
          as: "deliveryid",
        },
      },
      quantity: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("OrderItems");
  },
};
