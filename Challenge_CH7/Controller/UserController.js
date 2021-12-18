const { User } = require("../models/create_user");
const passport = require("../lib/passport");

module.exports = {
  register: (req, res, next) => {
    User.register(req.body)
      .then(() => {
        res.redirect("/login");
      })
      .catch((err) => next(err));
  },
  login: (req, res) => {
    User.authenticate(req.body).then((user) => {
      res.json(format(user));
    });
  },
  whoami: (req, res) => {
    const currentUser = req.user;
    res.json(currentUser);
  },
};
