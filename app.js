var express = require("express")
var Users = require("./models/db")
var ejs = require("ejs")

app = express()

app.set('view engine', 'ejs')

app.get('/', function(req,res){
    res.send("Hello World");
});
app.get('/bye', function(req,res){
    res.send("Goodbye world");
});

app.get('/users', (req,res) => res.render("user_template.ejs"))
app.listen();