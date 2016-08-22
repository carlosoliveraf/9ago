var app = require('./app_config.js');



var userController = require('./controller/userController.js');
var characterController = require('./controller/characterCtrl.js');
var oficialController = require('./controller/oficialCtrl.js');
var characController = require('./controller/characCtrl.js');
var blacklistController = require('./controller/blacklistCtrl.js');

var CronJob = require('cron').CronJob;
var validator = require('validator');
var tibia = require('tibia-node-crawler');

var fs = require('fs'),
    request = require('request'),
    cheerio = require('cheerio');
    

//
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://root:mongouser@ds021895.mlab.com:21895/tbamonitor';
//

//
var findRestaurants = function(db, callback) {
   var cursor =db.collection('characters').find( );
   cursor.each(function(err, doc) {
      assert.equal(err, null);
      if (doc != null) {
      	var char = doc;
		var characterObj;
		tibia.character(char.name, function(data){
		characterObj = data.character;
 		characterObj.lastBackup = new Date(); 	
 		//oficialController.save(characterObj, function(resp){});
   		//console.log('Saved backup of '+ characterObj.name+' at: ' + (new Date()));	
 		characterController.updateByName(characterObj, function(resp){});


	});	

         //console.dir(doc);
      } else {
         callback();
      }
   });
};

var findRestaurantsBlack = function(db, callback) {
   var cursor =db.collection('blacklists').find( );
   cursor.each(function(err, doc) {
      assert.equal(err, null);
      if (doc != null) {
      	var char = doc;
		var characterObj;
		tibia.character(char.name, function(data){
		characterObj = data.character;
 		characterObj.lastBackup = new Date(); 	
 		//oficialController.save(characterObj, function(resp){});
   		//console.log('Saved backup of '+ characterObj.name+' at: ' + (new Date()));	
 		blacklistController.updateByName(characterObj, function(resp){});

 		
	});	

         //console.dir(doc);
      } else {
         callback();
      }
   });
};
//

new CronJob('* * * *', function() {

	MongoClient.connect(url, function(err, db) {
	assert.equal(null, err);
  	findRestaurants(db, function() {
    db.close();
  	});
	});

	MongoClient.connect(url, function(err, db) {
	assert.equal(null, err);
  	findRestaurantsBlack(db, function() {
    db.close();
  	});
	});
	
		


	


}, null, true, 'America/Los_Angeles');


app.get('/isonline', function(req, res) {

  request('https://secure.tibia.com/community/?subtopic=worlds&world=Veludera', function (error, response, html) {
  if (!error && response.statusCode == 200) {
    var $ = cheerio.load(html);
                var resultado = [];

    $('.InnerTableContainer tr:not(:first-child)').each(function(i, element){
      

            var name = $(this).find('td').eq(0).text().trim(),
                    level = $(this).find('td').eq(1).text().trim(),
                    vocation = $(this).find('td').eq(2).text().trim();
                // Inserindo os dados num array
                resultado.push({
                    name: name,
                    level: level,
                    vocation: vocation
                });


    });
        res.json(resultado);
  }
});
})



// var tibia = require('tibia-node-crawler');
 
// tibia.character('Olivera Rullezz', function(data){
//   console.log(data.character);
//   console.log(data.character.level);
//   console.log(data.achievements);
//   console.log(data.deaths);
//   //etc 
//   console.log(data);
// });


app.get('/', function(req, res) {
    res.sendfile('index.html', {root: __dirname })
});

// app.get('/', function (req, res) {
//     res.render('index');
// }); 


// app.get('*', function (req, res) {
//     res.render('index');
// });

// app.get('index/', function (req, res) {
	//res.status(500).end();
	
	//userController.list(function(resp){
		//res.json(resp);
		

	//});



	//res.json(itens);
// });

app.get('/itens/:id', function (req, res) {

	var id = validator.trim(validator.escape(req.param('id')));
	userController.user(id, function(resp){
		res.json(resp);

	});


	//res.status(500).end();
	// res.json(itens);
});


app.post('/itens', function (req, res) {

	var fullname = validator.trim(validator.escape(req.param('fullname')));
	var email = validator.trim(validator.escape(req.param('email')));
	var password = validator.trim(validator.escape(req.param('password')));
	
	userController.save(fullname, email, password, function(resp){
		res.json(resp);
	});


	//res.end("post")
	//itens.push(item);
	//res.end();
});


app.put('/itens', function (req, res) {
		
	var id = validator.trim(validator.escape(req.param('id')));
	var fullname = validator.trim(validator.escape(req.param('fullname')));
	var email = validator.trim(validator.escape(req.param('email')));
	var password = validator.trim(validator.escape(req.param('password')));
	
	userController.update(id, fullname, email, password, function(resp){
		res.json(resp);

	});

});

app.delete('/itens/:id', function (req, res) {

	var id = validator.trim(validator.escape(req.param('id')));
	
		userController.delete(id, function(resp){
			res.json(resp);

		});


	//res.status(500).end();
	// res.json(itens);
});


app.get('/characters', function (req, res) {
	//res.status(500).end();
	
	characterController.list(function(resp){
		res.json(resp);
	});



	//res.json(itens);
});

app.get('/blacklist', function (req, res) {
	//res.status(500).end();
	
	blacklistController.list(function(resp){
		res.json(resp);
	});


	//res.json(itens);
});

app.post('/blacklist', function (req, res) {

	var blacklistC = req.body;
	blacklistController.save(blacklistC, function(resp){
		res.json(resp);
	});


	//res.end("post")
	//itens.push(item);
	//res.end();
});

app.delete('/blacklist/:id', function (req, res) {

	var id = req.param('id');
		blacklistController.delete(id, function(resp){
			res.json(resp);

		});


	//res.status(500).end();
	// res.json(itens);
});


app.get('/oficial/:name', function (req, res) {

	var name = req.param('name');
	oficialController.oficial(name, function(resp){
		res.json(resp);

	});


	//res.status(500).end();
	// res.json(itens);
});

app.get('/characters/:id', function (req, res) {

	var id = req.param('id');
	characterController.character(id, function(resp){
		res.json(resp);

	});


	//res.status(500).end();
	// res.json(itens);
});

app.get('/users', function (req, res) {
	//res.status(500).end();
	
	userController.list(function(resp){
		res.json(resp);
	});



	//res.json(itens);
});

app.get('/users/:id', function (req, res) {

	var id = req.param('id');
	userController.user(id, function(resp){
		res.json(resp);

	});


	//res.status(500).end();
	// res.json(itens);
});

app.post('/users', function (req, res) {

	var user = req.body;
	userController.save(user, function(resp){
		res.json(resp);
	});


	//res.end("post")
	//itens.push(item);
	//res.end();
});


app.post('/characters', function (req, res) {

	
	var character = req.body;
	//console.log(req.body);
	characterController.save(character, function(resp){
		res.json(resp);
	});


	//res.end("post")
	//itens.push(item);
	//res.end();
});

app.put('/users', function (req, res) {
	
	//var id = req.param('_id');
	var userEdit = req.body;
	userController.update(userEdit, function(resp){
		res.json(resp);

	});

});



app.delete('/characters/:id', function (req, res) {

	var id = req.param('id');
		characterController.delete(id, function(resp){
			res.json(resp);

		});


	//res.status(500).end();
	// res.json(itens);
});

app.put('/characters', function (req, res) {
	
	//var id = req.param('_id');
	var charEdit = req.body;
	characterController.update(charEdit, function(resp){
		res.json(resp);

	});

});

// app.put('/characters/:id', function (req, res) {
		
// 	var character = req.body;
// 	characterController.update(id, character, function(resp){
// 		res.json(resp);
// 	});

// });

//teste charac

app.get('/charac', function (req, res) {
	
	characController.list(function(resp){
		res.json(resp);
	});

});


app.delete('/users/:id', function (req, res) {

	var id = req.param('_id');
	
		userController.delete(id, function(resp){
			res.json(resp);

		});


	//res.status(500).end();
	// res.json(itens);
});



// app.post('/charac', function (req, res) {

// 	var name = validator.trim(validator.escape(req.param('name')));
// 	var level = validator.trim(validator.escape(req.param('level')));
// 	var vocation = validator.trim(validator.escape(req.param('vocation')));
// 	var stamina = validator.trim(validator.escape(req.param('stamina')));
// 	var equipments = req.param('equipments');
// 	var owner = validator.trim(validator.escape(req.param('owner')));

// 	//teste
// 	characController.save(name, level, vocation, stamina, equipments, owner function(resp){
// 		res.json(resp);
// 	});

// });




