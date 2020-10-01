// Description
// Given a binary tree, count the number of uni-value subtrees.

// A Uni-value subtree means all nodes of the subtree have the same value.

class TreeNode {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

function countUnivalSubtrees(root) {
    if (root === null) return 0
    let count = 0 
    
    dfs(root) 

    return count 

    function dfs(node) {
        if (node === null)   return 
        
        if (isUnival(node)) {
            count++
        }
        dfs(node.left)
        dfs(node.right)
    }
   
    function isUnival(node) {
        if (node === null) return true
        if (node.left === null && node.right === null) return true

        if (node.left === null) {
            if (node.val !== node.right.val) {
                return false
            }
            return isUnival(node.right)
        } 
        
        if (node.right === null) {
            if (node.val !== node.left.val) {
                return false
            }
            return isUnival(node.left)
        }

        if (node.val !== node.left.val || node.val !== node.right.val) {
            return false
        }
        return isUnival(node.left) && isUnival(node.right)
    }
}

let root = new TreeNode(5)
root.left = new TreeNode(1)
root.right = new TreeNode(5)
root.left.left = new TreeNode(5)
root.left.right= new TreeNode(5)
root.right.right = new TreeNode(5)

console.log(countUnivalSubtrees(root))