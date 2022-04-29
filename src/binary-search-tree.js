const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
// class Node
// {
//     constructor(data) {
//         this.data = data;
//         this.left = null;
//         this.right = null;
//     }
// }
class BinarySearchTree {
  constructor() {
    this.rootVar = null;
  }

  root() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.rootVar;

    // if (!this.root) {
    //     return null
    // }
    // return this.root.data;
  }

  add(data) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.rootVar = addNode(this.rootVar, data);

        function addNode(node, data) {
            if(!node) { //есть ли корень дерева
                return new Node(data);
            }
            if (node.data == data) {
                return node;
            }
            if (data < node.data) {
                node.left = addNode(node.left, data)
            }
            else {
                node.right = addNode(node.right, data)
            }
            return node;
        }
  }

  has(data) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return hasSearch(this.rootVar, data);

        function hasSearch(node, data) {
            if (!node) {
                return false;
            }
            if (node.data === data) {
                return true;
            }
            return data < node.data? hasSearch(node.left, data) : hasSearch(node.right, data)
        }
  }

  find(data) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return findElem(this.rootVar, data);

        function findElem(node, data) {
            if (!node) {
                return null;
            }
            if (node.data == data) {
                return node;
            }
            return data < node.data? findElem(node.left, data) : findElem(node.right, data)
        }
  }

  remove(data) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    this.rootVar = rmNode(this.rootVar, data);
        function rmNode(node, data) {
            if (!node) {
                return null;
            }
            if (data < node.data) {
                node.left = rmNode(node.left, data); // обновляем левое дерево
                return node;
            }
            else if (node.data < data) {
                node.right = rmNode(node.right, data);
                return node;
            }
            else {
                if(!node.left && !node.right) { // если не существует потомков у узла
                    return null;
                }
                if(!node.left) { // если не существует левого потомка
                    node = node.right;
                    return node;
                }
                if(!node.right) { // если не существует левого потомка
                    node = node.left;
                    return node;
                }
                // node.left & node.right exist
                let minRightSubTree = node.right;
                while (minRightSubTree.left) {
                    minRightSubTree = minRightSubTree.left
                }
                node.data = minRightSubTree.data;
                node.right= rmNode(node.right, minRightSubTree.data);
                return node;
            }
        }
  }

  min() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    if (!this.rootVar) {
      return;
  }
  let node = this.rootVar;

  while(node.left) {
      node = node.left;
  }
  return node.data;
  }

  max() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    if (!this.rootVar) {
      return;
  }
  let node = this.rootVar;
  while(node.right) {
      node = node.right;
  }
  return node.data;
  }
}

module.exports = {
  BinarySearchTree
};