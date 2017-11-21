require('dotenv').config();
var http = require('http');
var config = process.env || {};
var app = require('./config/express');
require('./config/database')(config.URI + config.DB_NAME);

http.createServer(app).listen(3000, function(){
    console.log("Listen on port 3000");
});