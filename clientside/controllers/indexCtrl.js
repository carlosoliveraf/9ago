angular.module("main").controller("indexCtrl", function ($rootScope,$scope, $http, $location) {
	        $scope.helloWorld = "Bem vindo meu amigo ";


	        $scope.checkLogged = function(){
					if($rootScope.logged){
						$rootScope.menu = true;
					}else{
						$location.path('/loginview');
					}
	        };
	        
	        $scope.checkLogged();
	        
	        $scope.click = function(){
	        	console.log("click1");
	        };


		
});