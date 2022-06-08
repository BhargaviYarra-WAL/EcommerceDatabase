"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("EcommerceProducts", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.STRING,
      },
      price: {
        type: Sequelize.INTEGER,
      },
      quantity: {
        type: Sequelize.INTEGER,
      },
      categoryid: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "ProductCategories",
          key: "id",
          as: "categoryid",
        },
      },
      merchantid: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "Merchants",
          key: "id",
          as: "merchantid",
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
    await queryInterface.dropTable("EcommerceProducts");
  },
};
