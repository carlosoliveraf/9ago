angular.module("main").controller("characterCtrl", function ($rootScope, $scope, $http, $location) {
	
		$scope.newCharacter = false;
		$scope.charactersList = false;
		$scope.charactersStats = false;
		$scope.characters = [];
		$scope.edition = false;


	    $scope.checkLogged = function(){
					if($rootScope.logged){
						$rootScope.menu = true;
					}else{
						$location.path('/loginview');
					}
	        };
	        
	        $scope.checkLogged();


		$scope.vocations = [ 'Elite Knight', 'Royal Paladin', 'Master Sorcerer', 'Elder Druid'];

		// $scope.characters = [ 
		// 	{
		// 		name: "Maggie Viz",
		// 		level: 206,
		// 		stamina: 42,
		// 		vocation: "Master Sorcerer"
		// 	},
		// 	{
		// 		name: "Olivera Rullezz",
		// 		level: 225,
		// 		stamina: 40,
		// 		vocation: "Royal Paladin"

		// 	}
		// ];


		$scope.findCharacters = function (character) {
		//$http.get('http://localhost:5000/characters/').then(function (response) {
		$http.get('https://lit-hamlet-34738.herokuapp.com/characters/').then(function (response) {
			//$scope.characters = response.data;
			for(index in response.data){
				if(response.data[index].owner == $rootScope.username){
					$scope.characters.push(response.data[index]);
				};
			};

		});
		};

		$scope.findCharacters();


		

		//https://blooming-headland-84997.herokuapp.com/characters/

		$scope.saveCharacter = function(character){
			// character.equipments = {
			// 	'helmet': character.helmet,
			// 	'armor': character.armor
			// };
			character.owner = $rootScope.username;
			// delete character.helmet;
			// delete character.armor;
			
			var characString = JSON.stringify(character);
			console.log(character);

			//var res = $http.post('http://localhost:5000/characters', character);
			var res = $http.post('https://lit-hamlet-34738.herokuapp.com/characters', character);

			res.success(function(data, status, headers, config) {
			$scope.message = data;
			alert( "Character created!");
			});
			res.error(function(data, status, headers, config) {
			alert( "failure message: " + JSON.stringify({data: data}));
			});		
    		$scope.characters.push(character);
    		$scope.newCharacter = false;
			delete $scope.character;
		};

		$scope.editCharacter = function(character){
			$scope.edition = true;
		};

		$scope.updateCharacter = function(character){
			$scope.edition = false;
		}



		$scope.eraseCharacter = function (character) {
			var id = character._id;
			console.log(id);
			//var res = $http.delete('http://localhost:5000/characters/'+id);
			var res = $http.delete('https://lit-hamlet-34738.herokuapp.com/characters/'+id);
			res.success(function(data, status, headers, config) {
			$scope.message = data;
			var posicao = $scope.characters.indexOf(character);
			$scope.characters.splice(posicao, 1);


			console.log($scope.characters);
			});
			res.error(function(data, status, headers, config) {
			alert( "failure message: " + JSON.stringify({data: data}));
			});
		// var id = character.id;
		// $http.delete('http://127.0.0.1:5000/characters/'+id).then(function (response) {
		// 	$scope.characters = response.data;
		// });
		};

		$scope.setOrder = function (field) {
		$scope.field = field;
		$scope.direction = !$scope.direction;
		};


		

		$scope.showCharactersStats = function(){
			$scope.charactersStats = !$scope.charactersStats;
			$scope.newCharacter = false;
			$scope.charactersList = false;
			delete $scope.character;
			delete $scope.newcharacter;




		}

		$scope.clearFields = function(newcharacter){
			delete $scope.newcharacter;

		}




	// $scope.itens = itens.data;

	// $scope.pedidos = [];
	// $scope.total = 0;
	// $scope.addItem = function (item) {
	// 	$scope.itens.push(item);
	// 	delete $scope.item;
	// };

	// $scope.fazerPedido = function (pedido) {
	// 	pedido.date = new Date();
	// 	pedido.subtotal = pedido.quantidade * pedido.item.price;
	// 	pedido.imposto = impostoService.calcular(pedido.subtotal);
	// 	$scope.pedidos.push(pedido);
	// 	delete $scope.pedido;
	// 	$scope.total = calcularTotal($scope.pedidos);
	// 	$scope.pedidoForm.$setPristine();
	// };

	// var calcularTotal = function (pedidos) {
	// 	var total = 0;
	// 	pedidos.forEach(function (pedido) {
	// 		total += pedido.subtotal;
	// 	});
	// 	return total + impostoService.calcular(total);
	// };

	// $scope.cancelarPedido = function (pedido) {
	// 	var posicao = $scope.pedidos.indexOf(pedido);
	// 	$scope.pedidos.splice(posicao, 1);
	// 	$scope.total = calcularTotal($scope.pedidos);
	// };

	// $scope.setOrdem = function (campo) {
	// 	$scope.campo = campo;
	// 	$scope.direcao = !$scope.direcao;
	// };
});