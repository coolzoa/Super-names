//jshint esversion6;

const superheroes = require("superheroes");
const supervillains = require("supervillains");
const express = require("express");
const bodyParser = require("body-parser");


const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs')
app.use(express.static("public"));

//target the home route
app.get("/", function(req, res) {
  //no hero
  res.render("index", {superName: "", superType: "hero"});
});

app.post("/", function(req, res) {
  let superType = req.body.nameType;
  let superName;
  if (superType == "hero") {
    superName = supervillains.random();
  } else {
    superName = superheroes.random();
  }
  res.render("index", {superName: superName, superType: superType});


});







app.get('*',function (req, res) {
        res.redirect('/');
    });

app.listen(3000, function() {
  console.log("Listening on port 3000");
});
