const { User_game } = require("./models");

User_game.update(
  {
    password: "090888",
  },
  { where: { id: 1 } }
)
  .then(() => {
    console.log("Password berhasil diganti");
    process.exit();
  })
  .catch((err) => {
    console.error("Gagal Mengupdate artikel");
  });
