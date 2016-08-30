 angular.module('main', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider){
        $routeProvider
        .when('/', {
            templateUrl: 'templates/loginview.html'
            ,controller: 'loginCtrl'
        })
        .when('/home', {
            templateUrl: 'templates/index.html'
            ,controller: 'indexCtrl'
        })
        .when('/second', {
            templateUrl: 'templates/second.html'
            ,controller: 'secondCtrl'
        })
        .when('/loginview', {
        templateUrl: 'templates/loginview.html',
        controller: 'loginCtrl',
        })
        .when('/signinview', {
        templateUrl: 'templates/signinview.html',
        controller: 'signinCtrl',
        })
        .when('/charactersview', {
        templateUrl: 'templates/characters.html',
        controller: 'characterCtrl',
        })
        .when('/mycharactersview', {
        templateUrl: 'templates/mycharactersview.html',
        controller: 'characterCtrl',
        })
        .when('/newcharactersview', {
        templateUrl: 'templates/newcharactersview.html',
        controller: 'characterCtrl',
        })
        .when('/blacklistview', {
        templateUrl: 'templates/blacklistview.html',
        controller: 'blacklistCtrl',
        })
        .when('/listplacesview', {
        templateUrl: 'templates/listplacesview.html',
        controller: 'huntingplacesCtrl',
        })
        .when('/newplaceview', {
        templateUrl: 'templates/newplaceview.html',
        controller: 'huntingplacesCtrl',
        })
        .when('/lastimageview', {
        templateUrl: 'templates/lastimageview.html',
        controller: 'lastimageCtrl',
        })
        .when('/aboutmeview', {
        templateUrl: 'templates/aboutmeview.html',
        controller: 'aboutmeCtrl',
        })
        .when('/usereditionview', {
        templateUrl: 'templates/usereditionview.html',
        controller: 'usereditionCtrl',
        })
        .when('/404errorview', {
        templateUrl: 'templates/404errorview.html',
        controller: '404errorCtrl',
        })
        .otherwise({
            redirectTo: '/404errorview'
        });
    }]);
    // .controller('secondCtrl', ['$scope', function ($scope){
    //     $scope.helloWorld = "World Hello";
    // }]);




