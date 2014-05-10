/*
	Model
		.observe()
		._notify()
*/
function Model(data) {
	$.extend(this, data);

	this._observers = [];
}

Model.prototype.observe = function(observer) {
	this._observers.push(observer);
	observer(this);
};

Model.prototype.notify = function() {
	var i, l;
	for (i = 0, l = this._observers.length; i < l; i++) {
		this._observers[i](this);
	}
};