Recipe App is a meal planner for someone who wants to plan their weekly healthy meals in an easy and effective way. Recipe App is a MEAN stack application.

Installation Instructions

1. Install MongoDB with Homebrew
 - brew install mongodb
 - sudo mkdir -p /data/db
 - whoami
 - sudo chown malissacruzromero /data/db
 - mongod
 - create new tab and type mongo in terminal

2. Install Node and NPM with Homebrew
 - brew install node

3. Create App
 - mkdir recipe
 - touch package.json
 <!-- {
   "name" : "recipe",
   "version" : "0.0.1"
 } -->
 - touch server.js
 - test server.js
<!-- console.log("Hello from Node!") -->
 - node server (type in terminal)
<!-- var express    = require('express');
var app        = express();

app.get('/', function (request, response) {
  response.sendfile(__dirname + '/client/views/index.html');
});

app.listen(3000, function() {
  console.log("I am listening");
}) -->

4. Upload App to Github
 - git init
 - touch README.md
 - git add README.md
 - git commit -m "first commit"
 - git push -u origin master

5. Install Express
 - npm install express --save
<!-- use --save so that package.json will insert the dependency -->
<!-- should use --save when install modules -->
