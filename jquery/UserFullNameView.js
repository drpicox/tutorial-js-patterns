function UserFullNameView() {
}

UserFullNameView.prototype.link = function(element) {
	element.html(
		'<div><strong>FullName</strong>: <span class="bind-full-name"></span></div>'
	);

	this.user.observe(function(user) {
		$('.bind-full-name', element).text(user.getFullName());
	});
};