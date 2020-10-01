// Given a non-empty binary search tree and a target value,
// find the value in the BST that is closest to the target.

class TreeNode {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

function closestValue(root, target) {
    let min = root.val
    while (root !== null) {
        if (Math.abs(root.val - target) < Math.abs(min - target)) {
            min = root.val
        }
        if (root.val > target) {
            root = root.left
        } else if (root.val < target) {
            root = root.right
        }
    }
    return min
}

let root = new TreeNode(4)
root.left = new TreeNode(2)
root.left.left = new TreeNode(1)
root.left.right = new TreeNode(3)
root.right = new TreeNode(5)

console.log(closestValue(root, 1.8))
