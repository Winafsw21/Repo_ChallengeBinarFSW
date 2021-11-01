// import module yang kita butuhkan
const express = require("express");
const expressLayouts = require("express-ejs-layouts");

const app = express();
const port = 3000;

// static File
app.use(express.static("public"));
app.use(express.static("public/assetch3"));

// midleware
var myLogger = function (request, response, next) {
  request.time = new Date();
  next();
};

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(myLogger);
app.use(expressLayouts);

//Pengaturan Tampilan View Engine
app.set("view engine", "ejs");
app.set('layout','./layouts/fullwidth-main')

app.get("", (req, res) => {
  res.render("index", { title: "Halaman Home" });
});

// router
const router = require("./router");
app.use(router);

// ErrorHandler
app.use((err, req, res, next) => {
  console.log(`error : ${err}`);
  res.status(500).json({
    status: "fail",
    message: err.message,
  });
});

app.use((req, res, next) => {
  res.status(404),
    json({
      status: "fail",
      message: `${req.url} 404 not found`,
    });
  next();
});

// app.use(useRouter);
app.listen(port, () => {
  console.log(`server berjalan di localhost : ${port}!`);
});
