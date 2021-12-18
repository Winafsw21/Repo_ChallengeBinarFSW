const passport = require("passport");
const { Strategy: JwtStrategy, ExtractJwt } = require("passport-jwt");
const { User } = require("../models/create_user");
const config = require("../config");

const options = {
  jwtFromRequest: ExtractJwt.fromHeader("authorization"),

  secretOrKey: config.secret,
};
passport.use(
  new JwtStrategy(options, async (payload, done) => {
    User.findByPk(payload.id)
      .then((user) => done(null, user))
      .catch((err) => done(err, false));
  })
);
module.exports = passport;
