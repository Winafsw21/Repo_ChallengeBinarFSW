const { User_game } = require("./models");
User_game.create({
  username: "Zahra",
  password: "260912",
}).then((user_game) => {
  console.log(user_game);
});
