var express = require("express");
var router = express.Router();

const posts = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date().toLocaleString(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date().toLocaleString(),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "My Posts", posts: posts });
});

router.post("/new", function (req, res, next) {
  posts.push({
    text: req.body.text,
    user: req.body.user,
    added: new Date().toLocaleString(),
  });
  res.redirect("/");
});

module.exports = router;
