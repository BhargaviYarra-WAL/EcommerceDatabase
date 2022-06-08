"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("MerchantCategories", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      merchantid: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Merchants",
          key: "id",
          as: "merchantid",
        },
      },
      categoryid: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "ProductCategories",
          key: "id",
          as: "categoryid",
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
    await queryInterface.dropTable("MerchantCategories");
  },
};
