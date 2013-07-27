var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  buffer = fs.readFileSync('index.html');
  str = buffer.toString('utf8');
  response.send(str);
});

app.get('/play', function(request, response) {
  buffer = fs.readFileSync('play.html');
  str = buffer.toString('utf8');
  response.send(str);
});


var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
