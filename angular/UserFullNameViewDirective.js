'use strict';

angular.module('drpicox.JsPatterns').directive('userFullNameView',
			['UserService', function
			( UserService ) {

	return {
		restrict: 'A',
		templateUrl: 'UserFullNameView.html',
		scope: {},
		link: function (scope, element, attrs) {

			UserService.get().
			then(function(user) {
				scope.user = user;
			});
		},
	};

}]);
