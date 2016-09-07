angular.module("main").controller("usereditionCtrl", function ($rootScope, $scope, $http, $location) {
	
		$scope.user = $rootScope.username;
		$scope.userToEdit;
		var login =	$rootScope.login;
		$scope.findUserToEdit = function(login){
			$http.get('https://shrouded-refuge-17729.herokuapp.com/users/'+$rootScope.login).then(function (response) {
			//$http.get('https://localhost:5000/users/'+$rootScope.login).then(function (response) {

			$scope.userToEdit = response.data;
						//return $location.path('/home');
					
		});


		};

		$scope.findUserToEdit(login);


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