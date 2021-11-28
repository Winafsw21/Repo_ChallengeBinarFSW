"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("User_games", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      id_biodata: {
        foreignKey: true,
        constraint: true,
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "User_game_biodates",
          key: "id",
        },
      },
      id_history: {
        foreignKey: true,
        constraint: true,
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "User_game_histories",
          key: "id",
        },
      },
      username: {
        type: Sequelize.STRING,
      },
      password: {
        type: Sequelize.STRING,
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("User_games");
  },
};
