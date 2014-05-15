var UserFullNameViewController = {

	launch: function() {
		UserService.get().
		done(function(user) {
			$('.user-full-name-view').each(function() {
				var view = new UserFullNameView();
				view.user = user;
				view.link($(this));
			});
		});
	},

};
