'use strict';

angular.module('drpicox.JsPatterns').directive('userFormView',
			['User','UserService', function
			( User , UserService ) {

	return {
		restrict: 'A',
		templateUrl: 'UserFormView.html',
		scope: {},
		link: function (scope, element, attrs) {

			UserService.get().
			then(function(user) {
				scope.user = new User(user);
			});

			scope.save = function() {
				UserService.save(scope.user);
			};
		},
	};

}]);