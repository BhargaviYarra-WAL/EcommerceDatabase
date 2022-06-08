"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("CartItems", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      quantity: {
        type: Sequelize.INTEGER,
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
      cartid: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "Carts",
          key: "id",
          as: "cartid",
        },
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
    await queryInterface.dropTable("CartItems");
  },
};
