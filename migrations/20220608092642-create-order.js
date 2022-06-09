"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Orders", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userid: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "ProductUsers",
          key: "id",
          as: "userid",
        },
      },
      useradressid: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "UserAddresses",
          key: "id",
          as: "useraddressid",
        },
      },
      totalamount: {
        type: Sequelize.INTEGER,
      },
      paymentid: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "Payments",
          key: "id",
          as: "paymentid",
        },
      },
      statusid: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "Statuses",
          key: "id",
          as: "statusid",
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
    await queryInterface.dropTable("Orders");
  },
};
