angular.module("main").controller("usereditionCtrl", function ($rootScope, $scope, $http, $location) {
	
		$scope.user = $rootScope.username;
		$scope.userToEdit;
		var login =	$rootScope.login;
		$scope.findUserToEdit = function(login){
			$http.get('https://shrouded-refuge-17729.herokuapp.com/users/'+$rootScope.login).then(function (response) {
			//$http.get('https://localhost:5000/users/'+$rootScope.login).then(function (response) {
			$scope.userToEdit = response.data;
			var login = params.login;
			var passw = criptography.encode(params.password);

			for(index in $scope.users){
				if($scope.users[index].username.toUpperCase() == login.toUpperCase() ){
					if($scope.users[index].password == passw){
						$rootScope.login = login;
						$rootScope.logged = true;
						$rootScope.menu = true;
						var nameParts = ($scope.users[index].name).split(" ");
						$rootScope.username = nameParts[0];
						$scope.error = false;
						return $location.path('/home');
						//return $location.url('/home');
					}
				}

			};
			$scope.error = true;

		});


		};


			$scope.checkPassword = function(user){
		if(!user.password || !user.confirmPassword){
			return $scope.difPasswords = false;
		}
		if(user.password == user.confirmPassword){
			$scope.difPasswords = false;
		}else{
			$scope.difPasswords = true;
		}
	};

		$scope.checkEmail = function(user){
		var email = user.email;
		if(email){
		for(index in $scope.users){
				if($scope.users[index].email.toUpperCase() == email.toUpperCase()){
					return $scope.emailAlreadyTaken = true;
				}else{
					$scope.emailAlreadyTaken = false;
				}
		};
		}else{
			$scope.emailAlreadyTaken = false;
		}
	};

});