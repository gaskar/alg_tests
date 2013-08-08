function Node(key, value){
	this._key = key || null;
	this._value = value || null;
	this._sum = 0;
	this._calculated = false;

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

Node.prototype.addToSum = function(value){
	this._sum += value;
	this._calculated = true;
};

Node.prototype.getSum = function(){
	return this._sum;	
};

Node.prototype.isCalculated = function(){
	return this._calculated;
}

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
	this._root = root || new Node(0, 0); 
}

Tree.prototype.getRoot = function(){
	return this._root;
};

Tree.prototype.addSumToNodes = function(node){
	
	if(node == null)
		return 0;

	
	node.addToSum(this.addSumToNodes(node.getLeftNode()));
    node.addToSum(this.addSumToNodes(node.getRightNode()));


	return node.getValue() + node.getSum();
};

Tree.prototype.getNodes = function(node, position){
	
	if(node == null)
		return;

	var prefix = '';
	for(var i = 0; i < position; i++)
		prefix += '--';

	console.log(prefix + '->' + node.getValue() + '(' + node.getKey() + ')' + '[' + node.getSum() + ']');

	position++;
	this.getNodes(node.getLeftNode(), position);
	this.getNodes(node.getRightNode(), position);

};

Tree.prototype.getRightPath = function(node, position){
	
	if(node == null)
		return;

	var prefix = '';
	for(var i = 0; i < position; i++)
		prefix += '--';

	console.log(prefix + '->' + node.getValue() + '(' + node.getKey() + ')' + '[' + node.getSum() + ']');

	this.getRightPath(node.getLeftNode().getSum() >= node.getRightNode().getSum() ? node.getLeftNode() : node.getRightNode(), ++position);

};

Tree.prototype.nodes = {};

var tree = new Tree(new Node(1, 2));

var leftNode = tree.getRoot().addLeftNode(2, 4);
var rightNode = tree.getRoot().addRightNode(3, 60);

var secLeftNode = leftNode.addLeftNode(4, 120);
leftNode.addRightNode(5, 60);

secLeftNode.addLeftNode(8, 1000);

rightNode.addLeftNode(6, 300);
rightNode.addRightNode(7, 500);


tree.getNodes(tree.getRoot(), 0);
tree.addSumToNodes(tree.getRoot(), 0);
console.log("_calculated");
tree.getNodes(tree.getRoot(), 0);
console.log("right path");

tree.getRightPath(tree.getRoot(), 0);