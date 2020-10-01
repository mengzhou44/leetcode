//Given a binary search tree and a node in it, find the in-order successor of that node in the BST.

class TreeNode {
     constructor(val) {
          this.val = val 
          this.left = null 
          this.right = null 
     }
}


function inorderSuccessor(root, p) {
    let successor = null  
    dfs(root)
    return successor 

    function dfs(node) {
         if (node === null) return 
         dfs(node.left)
         if (node.val > p.val) {
            successor= node
            return  
         }
         dfs(node.right)
    }
    
}

let root = new TreeNode(2)
root.left  = new TreeNode(1)
root.right = new TreeNode(3)

console.log(inorderSuccessor(root, root.left))

// let root = new TreeNode(5)
// root.left  = new TreeNode(3)
// root.left.left  = new TreeNode(2)
// root.left.left.left = new TreeNode(1)
// root.left.right = new TreeNode(4)
// root.right = new TreeNode(6)

// console.log(inorderSuccessor(root, root.right))
