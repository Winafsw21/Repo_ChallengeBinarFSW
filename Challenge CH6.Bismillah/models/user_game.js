"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User_game extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasOne(models.user_game_biodate, {
        foreignKey: "id",
      });
      this.hasMany(models.user_game_history, {
        foreignKey: "id",
      });
    }
  }
  User_game.init(
    {
      id_biodata: DataTypes.INTEGER,
      id_history: DataTypes.INTEGER,
      username: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User_game",
    }
  );
  User_game.Associate = function (models) {
    User_game.hasOne(models.User_game_biodates, {
      foreignKey: "id",
      as: "User_game_biodates",
    });
  };

  User_game.Associate = function (models) {
    User_game.hasMany(models.User_game_histories, {
      foreignKey: "id",
      as: "User_game_histories",
    });
  };
  return User_game;
};
