var express = require("express")
var path = require('path');

app = express()

app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', function(req,res){
    res.sendFile(__dirname + "/views/index.html");
});


app.get('/public/stylesheets/comingsoon.css', function(req,res){
    res.sendFile(__dirname + "/public/stylesheets/comingsoon.css");
});

app.get('/public/stylesheets/style.css', function(req,res){
    res.sendFile(__dirname + "/public/stylesheets/style.css");
});


http://localhost:3000/public/stylesheets/comingsoon.css
app.listen("3000");