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
	return this.getLeftNode();
};

Node.prototype.addRightNode = function(key, value){
	this._rightNode = new Node(key, value);
	return this.getRightNode();
};

Node.prototype.getChildNodes = function(node){

};

Node.prototype.getLeftChildLeftNode = function(){
	return this.getLeftNode().getLeftNode();
};

Node.prototype.getLeftChildRightNode = function(){
	return this.getLeftNode().getRightNode();
};

Node.prototype.getRightChildLeftNode = function(){
	return this.getRightNode().getLeftNode();
};

Node.prototype.getRightChildRightNode = function(){
	return this.getRightNode().getRightNode();
};

function Tree(root){
	this._root = root || new Node(); 
}

Tree.prototype.getRoot = function(){
	return this._root;
};

Tree.prototype.getNodes = function(node, position){
	
	if(node == null)
		return;

	var prefix = '';
	for(var i = 0; i < position; i++)
		prefix += '--';

	console.log(prefix + '->' + node.getValue() + '(' + node.getKey() + ')');

	position++;
	this.getNodes(node.getLeftNode(), position);
	this.getNodes(node.getRightNode(), position);
};

Tree.prototype.nodes = {};

var tree = new Tree(new Node(1, 2));

var leftNode = tree.getRoot().addLeftNode(2, 4);
var rightNode = tree.getRoot().addRightNode(3, 6);

leftNode.addLeftNode(4, 20);

tree.getNodes(tree.getRoot(), 0);