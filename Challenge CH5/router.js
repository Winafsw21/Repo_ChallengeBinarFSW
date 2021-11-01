const express = require("express");
const router = express.Router();
var user = [];
let posts = require("./posts.json");

// // router.web
router.use(function timeLog(req, res, next) {
  console.log("Time :", Date.now());
  next();
});

// define the home page route
router.get("/", (req, res) => { 
  res.render('index-main', { 
    title: "Halaman Home", 
    partial:"fullwidth-main.ejs"});
});

router.get("/game", (req, res) => {
  res.render("index-game",{
    title: "Halaman Game",
    partial : "fullwidth-game"
  });
});

// router.post("/regiter", (req, res) => {
//   const { email, password } = req.body;
//   user.push({ email, password });
//   res.redirect("/");
// });

// // Define the game suwit
// router.get("./game", function (req, res) {});

router.get("/api/post", (req, res) => {
  res.status(200).json(posts);
});

router.get("/api/post/:id", (req, res) => {
  const id = req.params.id;
  const post = posts.find((i) => i.id === +id);
  res.status(200).json(post);
});

// // router.post('/api/post',(req,res) =>{
// //     const {title,body}=req.body
// //     const id =posts[this.post.length -1].Id + 1
// //     const post =
// //     id=
// // })

module.exports = router;
