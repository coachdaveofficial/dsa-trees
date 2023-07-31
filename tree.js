/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    if (this.root === null) return 0;

    let total = this.root.val;

    function recursiveSum(node) {
      // iterate over children in node
      for (let child of node.children) {
        total += child.val;

        // if child also has children, start process again
        if (child.children.length > 0) {
          recursiveSum(child)
        }
      }
    }

    recursiveSum(this.root);
    return total;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    if (this.root === null) return 0;

    let evenArr = [];

    function recursiveEvens(node) {
      for (let child of node.children) {
        if (child.val % 2 === 0) {
          evenArr.push(child.val);
        }
        if (child.children.length > 0) {
          recursiveEvens(child)
        }
      }
    }

    recursiveEvens(this.root);
    return evenArr.length;

  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    if (this.root === null) return 0;

    let count = 0;

    if (this.root.val > lowerBound) {
      count++
    }

    function recursiveGreater(node) {
      for (let child of node.children) {
        if (child.val > lowerBound) {
          count++
        }
        if (child.children.length > 0) {
          recursiveGreater(child)
        }
      }
    }

    recursiveGreater(this.root);
    return count
  }
}

module.exports = { Tree, TreeNode };
