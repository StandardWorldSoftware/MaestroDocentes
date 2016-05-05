angular.module('maestro', ['ngRoute'])
    .config(function($routeProvider) {
        $routeProvider
            .when('/login', {
                templateUrl: 'views/login.html',
                controller: 'LoginController'})
            .otherwise('/login');
    });