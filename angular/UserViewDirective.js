'use strict';

angular.module('drpicox.JsPatterns').directive('userView',
			['UserService', function
			( UserService ) {

	return {
		restrict: 'A',
		templateUrl: 'UserView.html',
		scope: {},
		link: function (scope, element, attrs) {

			UserService.get().
			then(function(user) {
				scope.user = user;
			});
		},
	};

}]);