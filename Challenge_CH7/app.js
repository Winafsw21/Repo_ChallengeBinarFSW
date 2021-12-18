const express = require("express");
const app = express();

const flash = require("express-flash");
const { port = 3000 } = process.env;

const session = require("express-session");

// Pertama, setting request body parse
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Kedua setting session
app.use(
  session({
    secret: "Buat ini jadi rahasia",
    resave: false,
    saveUninitialized: false,
  })
);

// Ketiga, setting Passport
const passport = require("./lib/passport");
app.use(passport.initialize());

const router = require("./router");
app.use(router);

app.listen(port, () => {
  console.log(`Servernya berada pada port ${port}`);
});
