var express = require("express");
var bodyparser = require("body-parser");
const https = require("https");
var app = express();
var today = Date();
const port = process.env.PORT || 3000;
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");
app.get("/", function (req, res) {
  

  res.render("list", { date: today ,note:notes});
});
app.post("/", function (req, res) {
  console.log(req.body);
 notes.push(req.body.num1)
 res.render("list", { date: today ,note:notes});
});
var notes=[
  'milk'
]
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
