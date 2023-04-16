const { NotImplementedError } = require("../extensions/index.js");

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */

class Node {
  constructor(value) {
    this.data = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.tree = null;
  }

  root() {
    return this.tree;
  }

  add(value) {
    const node = new Node(value);

    if (!this.tree) {
      this.tree = node;
      return;
    }

    let current = this.tree;

    while (current) {
      if (node.data < current.data) {
        if (!current.left) {
          return (current.left = node);
        }

        current = current.left;
      } else {
        if (!current.right) {
          return (current.right = node);
        }

        current = current.right;
      }
    }
  }

  has(data) {
    if (!this.tree || !data) {
      return false;
    }

    return this.search(this.tree, data, "has");
  }

  find(data) {
    if (!this.tree || !data) {
      return null;
    }

    return this.search(this.tree, data, "find");
  }

  remove(value) {
    this.tree = removeNode(this.tree, value);

    function removeNode(node, value) {
      if (!node) {
        return null;
      }

      if (value < node.data) {
        node.left = removeNode(node.left, value);
        return node;
      } else if (node.data < value) {
        node.right = removeNode(node.right, value);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }

        if (!node.left) {
          node = node.right;
          return node;
        }

        if (!node.right) {
          node = node.left;
          return node;
        }

        let rightMinimum = node.right;

        while (rightMinimum.left) {
          rightMinimum = rightMinimum.left;
        }

        node.data = rightMinimum.data;

        node.right = removeNode(node.right, rightMinimum.data);

        return node;
      }
    }
  }

  min() {
    if (!this.tree) return null;

    let root = this.tree;

    while (root.left) {
      root = root.left;
    }

    return root.data;
  }

  max() {
    if (!this.tree) return null;

    let root = this.tree;

    while (root.right) {
      root = root.right;
    }

    return root.data;
  }

  search(node, dataValue, type) {
    if (!node) return type === "has" ? false : null;
    if (node.data === dataValue) return type === "has" ? true : node;

    return dataValue < node.data
      ? this.search(node.left, dataValue, type)
      : this.search(node.right, dataValue, type);
  }
}

module.exports = {
  BinarySearchTree,
};
