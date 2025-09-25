/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  const result = [];
  const inOrder = (node) => {
    if (!node) return;
    inOrder(node.left);
    result.push(node.val);
    inOrder(node.right);
  };

  inOrder(root);
  return result;
};



var inorderTraversal = function (root) {
  const result = [];
  const stack = [];
  let current = root;

  while (current || stack.length > 0) {
    // 一路压左子树
    while (current) {
      stack.push(current);
      current = current.left;
    }
    // 出栈 + 访问
    current = stack.pop();
    result.push(current.val);
    // 转向右子树
    current = current.right;
  }

  return result;
};