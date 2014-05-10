'use strict';

angular.module('drpicox.JsPatterns').factory('UserService',
        ['User','$q', function
        ( User , $q ) {

    var user = new User({
		name: 'John',
		surname: 'Smith',
	});

    var UserService = {
        get: function () {
            return $q.when(user);
        },
        save: function (newUser) {
        	angular.copy(newUser, user);
            return $q.when(user);
        },
    };

    return UserService;

}]);