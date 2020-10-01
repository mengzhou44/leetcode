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
 * @return {number}
 */
function rob(root) {
    let array = helper(root)

    return Math.max(array[0], array[1])

    function helper(root) {
        if (root === null) return [0, 0]
        let [leftRob, leftNotRob] = helper(root.left)
        let [rightRob, rightNotRob] = helper(root.right)

        let robD = root.val + leftNotRob + rightNotRob
        let robNotD = Math.max(
            leftRob + rightRob,
            leftRob + rightNotRob,
            leftNotRob + rightRob,
            leftNotRob + rightNotRob
        )

        return [robD, robNotD]
    }
}
