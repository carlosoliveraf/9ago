angular.module("main").controller("lastimageCtrl", function ($scope, $http, $rootScope, $location) {
	
	$scope.image;
	$scope.noRecord = false;

    $scope.findLastImage = function(){
    	var login = $rootScope.login;
    	//$scope.image = 'http://localhost:5000/seeimage/'+login;
    	$scope.image = 'https://shrouded-refuge-17729.herokuapp.com/seeimage/'+login;
		if(!$scope.image){
			$scope.noRecord = true;
		}else{
			$scope.noRecord = false;
		}

    };

      $scope.checkLogged = function(){
					if($rootScope.logged){
						$rootScope.menu = true;
					}else{
						$location.path('/loginview');
					}
	        };
	        
	        $scope.checkLogged();


	$scope.checkLogged();

    $scope.findLastImage();
	


});