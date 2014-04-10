phonecatApp.directive('menuItems', function() {
	

	return {
		
		template:
			'<ul class="section">'+
				'<li class="odd" ng-repeat="menu in menus">'+
					'<div menu-elements></div>'+
				'<li>'+
			'<ul>'
		 
	};
});


phonecatApp.directive('menuElements', function() {
	return {
    
		template:
			'<h2>{{menu.name}}</h2>'+
					'<ul>'+
						'<li ng-repeat="item in menu.elements" class="last">'+
								'<div ng-if="true == item.titulo">'+
									'<h2 class="subtitle" ><a href="#/food"><b>{{item.name}}</b></a></h2>'+
									'<span>{{item.price}} {{item.unit}}</span>'+
								'</div>'+
								'<div ng-if="false == item.titulo">'+
									'<h2 class="item"><a href="#/food">{{item.name}}</a></h2>'+
										'<span>{{item.price}} {{item.unit}}</span>'+
										'<p>'+
											'{{item.description}}'+
										'</p>'+
								'</div>'+
						'</li>'+
			'<ul>'
		 
	};
});
