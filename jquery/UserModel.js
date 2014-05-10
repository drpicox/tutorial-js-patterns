/*
	User
		.name
		.surname
*/
function User(data) {
	Model.call(this, data);
}

User.prototype = new Model();