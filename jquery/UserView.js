function UserView() {
}

UserView.prototype.link = function(element) {
	element.html(
		'<div><strong>Name</strong>: <span class="bind-name"></span></div>'+
		'<div><strong>Surname</strong>: <span class="bind-surname"></span></div>'
	);

	this.user.observe(function(user) {
		$('.bind-name', element).text(user.name);
		$('.bind-surname', element).text(user.surname);
	});
};