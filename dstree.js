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

Node.prototype.addLeftNode = function(key, value){
	this._leftNode = new Node(key, value);
	return this._leftNode;
};

Node.prototype.addRightNode = function(key, value){
	this._rightNode = new Node(key, value);
	return this._rightNode;
}

function Tree(root){
	this._root = root || new Node(); 
}

Tree.prototype.getRoot = function(){
	return this._root;
};


var rootNode = new Node(1, 2);