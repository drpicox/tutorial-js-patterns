/*
	User
		.name
		.surname
*/
'use strict';

angular.module('drpicox.JsPatterns').factory('User',
		[  function
		() {

	function User(data) {
		angular.copy(data, this);
	};
	return User;
}]);
