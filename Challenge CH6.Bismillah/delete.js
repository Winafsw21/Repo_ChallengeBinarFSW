const { User_game } = require("./models");

User_game.destroy({
  where: {
    id: 2,
  },
}).then(() => console.log("id no. 2 terhapus"));
