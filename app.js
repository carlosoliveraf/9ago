var app = require('./app_config.js');


var userController = require('./controller/userController.js');
var characterController = require('./controller/characterCtrl.js');
var oficialController = require('./controller/oficialCtrl.js');
var characController = require('./controller/characCtrl.js');


var validator = require('validator');




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
	console.log(req.body);
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




