var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
//setting middleware
app.use(express.static(__dirname + '/public')); //Serves resources from public folder
var server = app.listen(port);
