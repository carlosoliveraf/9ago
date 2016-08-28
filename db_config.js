//var db_string = 'mongodb://127.0.0.1/appteste';
var db_string = 'mongodb://root:mongouser@ds021895.mlab.com:21895/tbamonitor';



var mongoose = require('mongoose').connect(db_string);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'Erro ao conectar banco'));

db.once('open', function(){
	var userSchema = mongoose.Schema({
		name: String,
		email: String,
		username: String,
		password: String,
		created_at: Date
	});

	exports.User = mongoose.model('User', userSchema);


	var characterSchema = mongoose.Schema({
		name: String,
		sex: String,
		level: Number,
		vocation: String,
		stamina: String,
		staminaUpdate: Date,
		balance: Number,
		world: String,
		residence: String,
		// equipments : [{ 'helmet': String, 'armor': String }],
		owner: String
	});

	exports.Character = mongoose.model('Character', characterSchema);

	var oficialSchema = mongoose.Schema({
		name: String,
		level: Number,
		lastBackup: Date
	});

	exports.Oficial = mongoose.model('Oficial', oficialSchema);

	var blacklistSchema = mongoose.Schema({
		name: String,
		level: Number,
		vocation: String,
		obs: String,
		listedBy: String,
		lastBackup: Date
	});

	exports.BlackList = mongoose.model('BlackList', blacklistSchema);

	var huntingplaceSchema = mongoose.Schema({
		name: String,
		city: String,
		vocation: String,
		range: String,
		detail: String,
		owner: String,
		link: String
	});

	exports.HuntingPlace = mongoose.model('HuntingPlace', huntingplaceSchema);

	var imagemSchema = mongoose.Schema({
		nome: String,
		date: Date,
		file: Buffer
		
	},{ collection: 'imagem' });

	exports.Imagem = mongoose.model('imagem', imagemSchema);

});


