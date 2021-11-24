"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn("User_games", "Id_biodata", {
        type: Sequelize.INTEGER,
        allownull: false,
      }),
      queryInterface.addColumn("User_games", "Id_history", {
        type: Sequelize.INTEGER,
        allownull: false,
      }),
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return Promise.all([queryInterface.removeColumn("User_game", "Id_biodata"), queryInterface.removeColumn("User_game", "Id_history")]);
  },
};
