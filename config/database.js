module.exports = function(uri){

var mongoose = require('mongoose');
var bluebird = require('bluebird');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://' + uri);

mongoose.connection.on('connected', function() {
    console.log('Connected to database');
});

mongoose.connection.on('error', function(error){
   console.log('Connection error');
})

mongoose.connection.on('disconnected', function(){
   console.log('Disconnect the database');
});

process.on('SIGINT', function(){
    mongoose.connection.close(function(){
        console.log('Connection terminated by app termination');
        process.exit(0);
    });
});
}