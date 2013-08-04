function Node(key, value){
	this._key = key || null;
	this._value = value || null;

	this._leftNode = null;
	this._rightNode = null;
}

Node.prototype.getValue = function(){
	return this._value;
};

Node.prototype.getKey = function(){
	return this._key;
};

Node.prototype.getLeftNode = function(){
	return this._leftNode;
};

Node.prototype.getRightNode = function(){
	return this._rightNode;
};

Node.prototype.setLeftNode = function(key, value){
	this._leftNode = new Node(key, value);
};

Node.prototype.setRightNode = function(key, value){
	this._rightNode = new Node(key, value);
}



var rootNode = new Node(1, 2);