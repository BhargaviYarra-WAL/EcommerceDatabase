"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Cards", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      cardnum: {
        type: Sequelize.INTEGER,
      },
      cvv: {
        type: Sequelize.INTEGER,
      },
      cardholder_name: {
        type: Sequelize.STRING,
      },
      expirydate: {
        type: Sequelize.DATE,
      },
      cardtype: {
        type: Sequelize.STRING,
      },
      userid: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "ProducUsers",
          key: "id",
          as: "userid",
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
    await queryInterface.dropTable("Cards");
  },
};
