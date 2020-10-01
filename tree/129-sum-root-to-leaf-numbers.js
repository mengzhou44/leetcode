/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
function sumNumbers(root) {
    let sum = 0
    dfs(root)
    return sum

    function dfs(node, current = 0) {
        if (node === null) return
        current = 10 * current + node.val
        if (node.left === null && node.right === null) {
            sum += current
            return
        }

        dfs(node.left, current)
        dfs(node.right, current)
    }
}
