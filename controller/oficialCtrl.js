var db = require('../db_config.js');
var tibia = require('tibia-node-crawler');


exports.list = function(callback){

	
};


exports.oficial = function(name, callback) {

	tibia.character(name, function(data){
 		callback(data);

});

};





