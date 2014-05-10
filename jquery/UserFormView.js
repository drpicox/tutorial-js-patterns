function UserFormView() {
}

UserFormView.prototype.link = function(element) {
	element.html(
		'<form>'+
		'<div><strong>Name</strong>: <input class="model-name"></div>'+
		'<div><strong>Surname</strong>: <input class="model-surname"></div>'+
		'<div><input type="submit" value="Update"></div>'+
		'</form>'
	);

	var view = this;
	$('form', element).submit(function(event) {
		view.user.name = $('.model-name', element).val();
		view.user.surname = $('.model-surname', element).val();
		view.save();
		event.preventDefault();
	});

	view.user.observe(function(user) {
		$('.model-name', element).val(user.name);
		$('.model-surname', element).val(user.surname);
	});
};