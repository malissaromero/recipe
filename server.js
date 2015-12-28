//

// modules
var express    = require('express');
var app        = express();

app.get('/', function (request, response) {
  res.sendfile(__dirname + '/client/views/index.html');
});

app.listen(3000, function() {
  console.log("I am listening");
})
