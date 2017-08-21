var webApp = angular.module('webApp',['ngRoute']);

webApp.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'main/',
		controller: 'homeController'
	})
	.when('/reviews/model-1/', {
		templateUrl: 'reviews/model-1/',
		controller: 'reviewController'
	})
});

webApp.controller('homeController', ['$scope','$location', function($scope, $location) {

	$scope.sideCaption = '"...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis orci non velit sollicitudin luctus.'+
	 			  'Duis quis metus lacus..."';
}]);

webApp.controller('reviewController', ['$scope','$location', function($scope, $location) {
	$scope.review = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ornare quam id faucibus tincidunt. Integer lorem sem, ullamcorper a tortor ut,'+
	                ' accumsan tristique mauris. Vestibulum molestie tincidunt molestie. Maecenas nisi erat, mollis aliquet lobortis sit amet, maximus in est. Aenean'+
	                ' lacinia molestie dolor ut faucibus. Maecenas quis felis vel massa faucibus malesuada et id nisl. Suspendisse ornare cursus tellus vitae volutpat.'+
	                ' Sed at consequat mi. Nunc tempor libero et nisi mattis varius. Nullam interdum vel nisl sed facilisis. Suspendisse tincidunt dui nec est ornare,'+
	                ' quis imperdiet tellus egestas. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae orci augue. Mauris a sapien dignissim, blandit mi in, sagittis eros.'
}]);