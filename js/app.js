(function(){

	var anewsing = angular.module('anewsing', []);

	anewsing.controller('MainCtrl', ['$scope', function($scope) {

		$scope.test = 'Hello anewsing world!';

	}]);

})();