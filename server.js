var express = require('express');
var app = express();
var path = require('path');
const http = require('http');
const port = 8080;
var itemData = require('./public/itemData.json');
app.use(express.static('public'));

app.get('/',function(req,res){
    res.sendFile('index.html',{root:__dirname});
})

app.get('/itemData',function(req,res){
    res.send(itemData);
})

var server = http.createServer(app).listen(port,function(){
    console.log("Application listening at "+port);
})

