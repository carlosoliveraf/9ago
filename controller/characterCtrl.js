var db = require('../db_config.js');


exports.list = function(callback){

	db.Character.find({}, function(error, characters) {

		if(error) {

			callback({error: 'Não foi possivel retornar os usuarios'});
		} else {

			callback(characters);
		}
	});
};


exports.character = function(id, callback) {

	db.Character.findById(id, function(error, character) {

		if(error) {

			callback({error: 'Não foi possivel retornar o usuario'});
		} else {

			callback(character);
		}
	});
};


exports.save = function(character, callback){

	new db.Character(character).save(function(error, character) {

		if(error) {

			callback({error: 'Não foi possivel salvar o usuario'});
		} else {

			callback(character);
		}
	});
};


exports.update = function(id, characterParam, callback) {

	db.Character.findById(id, function(error, character) {

		if(characterParam.name) {

			character.name = characterParam.name;
		}

		if(characterParam.level) {

			character.level = characterParam.level;
		}

		if(characterParam.stamina) {

			character.stamina = characterParam.stamina;
		}

		if(characterParam.vocation) {

			character.vocation = characterParam.vocation;
		}
		if(characterParam.balance) {

			character.vocation = characterParam.balance;
		}
		if(characterParam.owner) {

			character.vocation = characterParam.owner;
		}

		character.save(function(error, character) {

			if(error) {

				callback({error: 'Não foi possivel salvar o usuario'});
			} else {

				callback(character);
			}
		});
	});
};


exports.delete = function(id, callback) {

	db.Character.findById(id, function(error, character) {

		if(error) {
			console.log(error);
			callback({error: 'Não foi possivel retornar o usuario'});
		} else {

			character.remove(function(error) {

				if(!error) {

					callback({response: 'Usuário excluido com sucesso'});
				}
			});
		}
	});
	
};



