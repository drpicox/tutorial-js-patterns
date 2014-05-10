/*
	UserService
		.get() : user promise
		.save(user) : promise (when done)
*/
var UserService = {

	get: function() {
		// stub
		return $.when(this._user);
	},

	save: function(user) {
		$.extend(this._user, user);
		this._user.notify();
		// stub
		return $.when('ok');
	},

	_user: new User({
		name: 'John',
		surname: 'Smith',
	}),

};