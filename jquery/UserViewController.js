var UserViewController = {

	launch: function() {
		UserService.get().
		done(function(user) {
			$('.user-view').each(function() {
				var view = new UserView();
				view.user = user;
				view.link($(this));
			});
		});
	},

};
