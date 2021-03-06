/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

function invertTree(root) {
    if (root === null)  return null
    if (root.left=== null && root.right === null)  return root
   
    let temp = root.left
    root.left = invertTree(root.right)
    root.right=  invertTree(temp)
    return root 
}