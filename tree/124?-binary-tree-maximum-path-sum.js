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
function maxPathSum(root) {
    let max = Number.MIN_SAFE_INTEGER
    helper(root)
    return max

    function helper(root) {
        if (root === null) return 0

        let l = Math.max(0, helper(root.left))
        let r = Math.max(0, helper(root.right))
        max = Math.max(max, l + r + root.val)

        return Math.max(l, r) + root.val
    }
}
