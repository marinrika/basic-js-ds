const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    const node = this.rootNode;
    if (!node) {
      this.rootNode = new Node(data);
      return;
    } else {
      const addData = function (node) {
        if (data < node.data) {
          if (!node.left) {
            node.left = new Node(data);
            return;
          } else if (node.left) {
            return addData(node.left);
          }
        } else if (data > node.data) {
          if (!node.right) {
            node.right = new Node(data);
            return;
          } else if (node.right) {
            return addData(node.right);
          }
        }
      };
      return addData(node);
    }
  }

  has(data) {
    let current = this.rootNode;
    if (!current) return false;
    while (current) {
      if (data === current.data) {
        return true;
      }
      data < current.data
        ? (current = current.left)
        : (current = current.right);
    }
    return false;
  }

  find(data) {
    let current = this.rootNode;
    while (current.data !== data) {
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
      if (current === null) {
        return null;
      }
    }
    return current;
  }

  remove(data) {
    const removeData = function (node, data) {
      if (node === null) return null;
      if (data === node.data) {
        if (node.left === null && node.right === null) return null;
        if (node.left === null) return node.right;
        if (node.right === null) return node.left;
        let minRight = node.right;
        while (minRight.left !== null) {
          minRight = minRight.left;
        }
        node.data = minRight.data;
        node.right = removeData(node.right, minRight.data);
        return node;
      } else if (data < node.data) {
        node.left = removeData(node.left, data);
        return node;
      } else {
        node.right = removeData(node.right, data);
        return node;
      }
    };
    this.rootNode = removeData(this.rootNode, data);
  }

  min() {
    let node = this.rootNode;
    while (node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    let node = this.rootNode;
    while (node.right) {
      node = node.right;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree,
};
