var phonecatApp = angular.module('phonecatApp', [ 'ngRoute','phonecatControllers']);

phonecatApp.config(['$routeProvider',
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
	  when('/blog', {
        templateUrl: 'blog.html',
        controller: 'BlogCtrl'
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
	  otherwise({
        redirectTo: '/main'
      });
  }]);
  
 