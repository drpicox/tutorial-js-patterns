var UserFormViewController = {

	launch: function() {
		UserService.get().
		done(function(user) {
			$('.user-form-view').each(function() {
				var view = new UserFormView();
				view.user = user;
				view.save = function() {
					UserService.save(user);
				};
				view.link($(this));
			});
		});
	},

};
