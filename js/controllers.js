var phonecatControllers = angular.module('phonecatControllers', []);
 
phonecatControllers.controller('MainCtrl', ['$scope', '$http',
  function ($scope, $http) {
	$scope.$emit('someEvent', false);
  }]);
 
phonecatControllers.controller('FoodCtrl', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    $scope.$emit('someEvent', true);
	$scope.menus = [
			{name: 'Entrantes', elements: [
				{name: 'De la Tierra', titulo: true},
				{name: 'Surtido ibéricos', price: '14.50', description: '', titulo: false, unit:'€'},
				{name: 'Jamón de Bellota con pulpa de tomate', price: '16.00', description: '', titulo: false, unit:'€'},
				{name: 'Revuelto de Morcilla, manzana y nueces', price: '8.00', description: '', titulo: false, unit:'€'},
				{name: 'Mollejas de lechal', price: '10.00', description: '', titulo: false, unit:'€'},
				{name: 'De la Mar', titulo: true},
				{name: 'Calamares a la Andaluza', price: '9.00', description: '', titulo: false, unit:'€'},
				{name: 'Pulpo con puré parmentier', price: '15.00', description: '', titulo: false, unit:'€'},
				{name: 'Gambones a la sal', price: '11.00', description: '', titulo: false, unit:'€'},
				{name: 'Almejas marineras', price: '13.00', description: '', titulo: false, unit:'€'},
				{name: 'Revuelto de gulas y gambas', price: '9.00', description: '', titulo: false, unit:'€'},
				{name: 'De la Huerta', titulo: true},
				{name: 'Croquetas de boletus y jamón ibérico', price: '9.00', description: '', titulo: false, unit:'€'},
				{name: 'Setas al ajillo', price: '9.00', description: '', titulo: false, unit:'€'},
				{name: 'Tempura de verduras con gambones braseados', price: '11.00', description: '', titulo: false, unit:'€'},
				{name: 'Setas con almejas', price: '13.00', description: '', titulo: false, unit:'€'},
				{name: 'Revuelto de gulas y gambas', price: '13.00', description: '', titulo: false, unit:'€'},
				{name: 'Parrillada de verduras con muselina de ajo', price: '9.00', description: '', titulo: false, unit:'€'}
			]},
			{name: 'Ensaladas', elements: [
				{name: 'Ensalada rociera', price: '6.00', description: '', titulo: false, unit:'€'},
				{name: 'Ensalada de ventresca y trigueros', price: '9.00', description: '', titulo: false, unit:'€'},
				{name: 'Ensalada de queso de cabra con crujiente de bacon', price: '9.00', description: '', titulo: false, unit:'€'}
			]},
			{name: 'Pescados', elements: [
				{name: 'Suprema de merluza con carabineros', price: '18.00', description: '', titulo: false, unit:'€'},
				{name: 'Lubina a la espalda', price: '13.00', description: '', titulo: false, unit:'€'},
				{name: 'Dorada con vinagreta de piparras', price: '13.00', description: '', titulo: false, unit:'€'}
			]},
			{name: 'Carnes', elements: [
				{name: 'Entrecotte al gusto', price: '12.50', description: '', titulo: false, unit:'€'},
				{name: 'Chuletón de buey', price: '16.00', description: '', titulo: false, unit:'€'},
				{name: 'Solomillo de ternera', price: '17.00', description: '', titulo: false, unit:'€'},
				{name: 'Chuletón "El Timón"', price: '36.00', description: '', titulo: false, unit:'€/kg'},
				{name: 'Parrillada de carne', price: '15.00', description: '', titulo: false, unit:'€'},
				{name: 'Steak Tartar con aceite de lima', price: '15.00', description: '', titulo: false, unit:'€'},
				{name: 'Solomillo ibérico con coulis de frutos rojos', price: '12.00', description: '', titulo: false, unit:'€'}
			]},
			{name: 'Arroces', elements: [
				{name: 'Arroz con bogavante', price: '14.00', description: '', titulo: false, unit:'€'},
				{name: 'Arroz con carabineros', price: '16.00', description: '', titulo: false, unit:'€'}
			]},
			{name: 'Menu infantil', elements: [
				{name: 'Macarrones boloñesa o carbonara', price: '6.90',  description: '', titulo: false, unit:'€'},
				{name: 'Escalope de ternera',  description: '', titulo: false},
				{name: 'Finger de pollo casero',  description: '', titulo: false},
				{name: 'Zumo o agua',  description: '', titulo: false},
			]},
			{name: 'Postres', elements: [
				{name: 'Sorbete de limón al cava', price: '4.00', description: '', titulo: false, unit:'€'},
				{name: 'Tarta al whisky', price: '4.50', description: '', titulo: false, unit:'€'},
				{name: 'Couland de chocolate con helado de vainilla', price: '4.50', description: '', titulo: false, unit:'€'},
				{name: 'Flan casero de nata con frutos rojos', price: '3.50', description: '', titulo: false, unit:'€'},
				{name: 'Tiramisú', price: '4.50', description: '', titulo: false, unit:'€'},
			]}
	];
  }]);
  
  
  phonecatControllers.controller('BeerCtrl', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    $scope.$emit('someEvent', true);
	
	$scope.menus = [
			{name: '', elements: [
				{name: 'Vino tinto de la casa de Osborne Solaz', price: '9.00', description: '', titulo: false, unit:'€'},
				{name: 'Ribera del Duero Val Aranda', price: '13.00', description: '', titulo: false, unit:'€'},
				{name: 'Rioja Viña Monty Crianza', price: '13.00', description: '', titulo: false, unit:'€'},
				{name: 'Rueda Monasterior Palazuelo', price: '10.00', description: '', titulo: false, unit:'€'},
				{name: 'Peñascal Rosado', price: '10.00', description: '', titulo: false, unit:'€'},
				{name: 'Cune Crianza', price: '19.50', description: '', titulo: false, unit:'€'}
			]}
	];
  }]);

  phonecatControllers.controller('BlogCtrl', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    $scope.$emit('someEvent', true);
  }]);

  phonecatControllers.controller('ContactCtrl', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    $scope.$emit('someEvent', true);
  }]);

  phonecatControllers.controller('ReservationCtrl', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    $scope.$emit('someEvent', true);
  }]);
  
  phonecatControllers.controller('AboutCtrl', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    $scope.$emit('someEvent', true);
  }]);

 phonecatControllers.controller('BodyCtrl', ['$scope', '$routeParams',
  function($scope, $routeParams) {
	$scope.$on('someEvent', function(event, args) {
		$scope.boolChangeClass = args;
	});
     
  }]);
  
  phonecatControllers.controller('mapCtrl', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    $scope.$emit('someEvent', true);
	
	$scope.init = function () {
		var map_canvas = document.getElementById('map_canvas');
        var map_options = {
          center: new google.maps.LatLng(40.531615, -3.482661),
          zoom: 17,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(map_canvas, map_options);
		
		var myLatLng = new google.maps.LatLng(40.531615, -3.482661);
		var newMark = new google.maps.Marker({
			position: myLatLng,
			map: map
		});
	};
	
  }]);