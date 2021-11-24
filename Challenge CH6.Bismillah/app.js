const express = require("express");
const app = express();
const { User_game } = require("./models");

app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(express.json());
app.set("view engine", "ejs");

// tampilan awal dashboad login
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/users/login", (req, res) => {
  res.render("login");
});

app.get("/users/register", (req, res) => {
  res.render("register");
});

app.get("/users/dashboard", (req, res) => {
  res.render("dashboard");
});

app.get("/users/dashboard", (req, res) => {
  res.render("dashboard", { username: "Winanti Puspita Sari" });
});

// GET articless by Id
app.get("/User_game/:id", (req, res) => {
  Article.findOne({
    where: { id: req.params.id },
  }).then((article) => {
    res.status(200).json(article);
  });
});

// POST an User_game
app.post("/Users/register", (req, res) => {
  User_game_biodate.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    password2: req.body.password2,
  })
    .then((Use_) => {
      res.send("Article berhasil dibuat");
      res.status(201).json(article);
    })
    .catch((err) => {
      res.status(422).json("Can't create article");
    });
});

// GET/ articles/create, menampilkan form create
app.get("/articles/create", (req, res) => {
  res.render("/articles/create");
});

// PUT an article
app.put("/articles/:id", (req, res) => {
  Article.update(
    {
      title: req.body.title,
      body: req.body.body,
      approved: req.body.approved,
    },
    {
      where: { id: req.params.id },
    }
  )
    .then((articles) => {
      res.status(201).json(article);
    })
    .catch((err) => {
      res.status(422).json(" Can't create article");
    });
});

app.listen(3000, () => console.log("berhasil"));
