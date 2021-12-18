const router = require("express").Router();
const home = require("./Controller/HomeController");
const User = require("./Controller/UserController");

// middleware
const restrict = require("./middleware/restrict");
// homepage
router.get("/", home.index);

// Register Page
router.get("/api/v1/auth/register", User.register);

// login Page
router.post("/api/v1/login", User.login);

module.exports = router;
