/*
	Model
		.observe(fn)  <- function to register an observer
		.notify()     <- function to be called after the model is changed to notify observers
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