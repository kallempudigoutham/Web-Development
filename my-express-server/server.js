
const express = require('express');
const app = express();

app.get('/', function(req, res){
   res.send('<h1> Hello World </h1>');
});

app.get('/contact' , function(req, res){
   res.send('Please contact me at: gouthammanit@gmail.com');
});

app.get('/about' , function(req, res){
   res.send('This is me Goutham');
});

app.get('/hobbies' , function(req, res){
   res.send('<ul><li> Cricket </li></ul>')
});

app.listen(3000 , function(){
   console.log("Server started on 3000");
});
