// Given a binary tree, find the length of the longest consecutive sequence path.

// The path refers to any sequence of nodes from some starting node to any node
// in the tree along the parent-child connections.  The longest consecutive path need
// to be from parent to child (cannot be the reverse).

class TreeNode {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

function longestConsecutive(node) {
    if (node === null) return 0
    let max = 1
    dfs(node, 1)

    return max

    function dfs(node, current) {
        if (node === null) return
        if (node.left === null && node.right === null) {
            max = Math.max(max, current)
            return
        }
        if (node.left !== null) {
            if (node.left.val === node.val + 1) {
                dfs(node.left, current + 1)
            } else {
                max = Math.max(max, current)
                dfs(node.left, 1)
            }
        }

        if (node.right !== null) {
            if (node.right.val === node.val + 1) {
                dfs(node.right, current + 1)
            } else {
                max = Math.max(max, current)
                dfs(node.right, 1)
            }
        }
    }
}

let root = new TreeNode(1)
root.right = new TreeNode(3)
root.right.right = new TreeNode(4)
root.right.right.right = new TreeNode(5)
root.right.left = new TreeNode(2)

console.log(longestConsecutive(root))

let root1 = new TreeNode(2)
root1.right = new TreeNode(3)
root1.right.left = new TreeNode(2)
root1.right.left.left = new TreeNode(1)
console.log(longestConsecutive(root1))
