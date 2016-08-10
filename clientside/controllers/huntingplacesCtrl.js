angular.module("main").controller("huntingplacesCtrl", function ($rootScope, $scope, $http, $location) {
	        
	        $scope.checkLogged = function(){
					if($rootScope.logged){
						$rootScope.menu = true;
					}else{
						$location.path('/loginview');
					}
	        };
	        
	        $scope.checkLogged();
		
});