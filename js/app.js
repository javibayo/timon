var timonApp = angular.module('timonApp', [ 'ngRoute','timonControllers']);

timonApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/main', {
        templateUrl: 'main.html',
        controller: 'MainCtrl'
      }).
      when('/food', {
        templateUrl: 'food.html',
        controller: 'FoodCtrl'
      }).
      when('/beer', {
        templateUrl: 'beer.html',
        controller: 'BeerCtrl'
      }).
	  when('/contact', {
        templateUrl: 'contact.html',
        controller: 'ContactCtrl'
      }).
	  when('/about', {
        templateUrl: 'about.html',
        controller: 'AboutCtrl'
      }).
	  when('/reservation', {
        templateUrl: 'reservation.html',
        controller: 'ReservationCtrl'
      }).
	  when('/menudia', {
        templateUrl: 'menu-dia.html',
        controller: 'MenuDiaCtrl'
      }).
	  when('/grupos', {
        templateUrl: 'grupos.html',
        controller: 'GruposCtrl'
      }).
	  otherwise({
        redirectTo: '/main'
      });
  }]);
  
 