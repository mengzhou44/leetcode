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
function rightSideView(root) {
    if (root === null) return []
    let result = []
    let array = [root]
    while (array.length > 0) {
        let levelSize = array.length
        let count = 0
        let temp
        while (count < levelSize) {
            let node = array.shift()
            temp = node.val
            if (node.left !== null) {
                array.push(node.left)
            }
            if (node.right !== null) {
                array.push(node.right)
            }

            count++
        }
        result.push(temp)
    }

    return result
}
