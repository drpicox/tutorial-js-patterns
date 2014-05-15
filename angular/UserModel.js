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

	User.prototype.getFullName = function() {
		return this.name +' '+ this.surname;
	};
	
	return User;
}]);
