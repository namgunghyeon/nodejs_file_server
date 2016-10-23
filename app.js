var express = require('express');
var http = require('http');
var fs = require('fs');
var app = express();
var PORT = 54771;

http.createServer(app).listen(PORT, function(){
    console.log('Express server listening on port : ' + PORT);
});

app.get('/data/:id', function(req, res){
	var filename = req.params.id;
	filepath = __dirname + "/files/" + filename;
	console.log(filepath);
	res.download(filepath);
});

