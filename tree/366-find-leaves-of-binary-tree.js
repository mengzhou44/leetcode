// Given a binary tree, find all leaves and then remove those leaves. Then repeat the previous steps until the tree is empty.

// Example:
// Given binary tree

//           1
//          / \
//         2   3
//        / \
//       4   5
// Returns [4, 5, 3], [2], [1].

class TreeNode {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

function findLeaves(root) {
     let array=[] 
     
     dfs(root)

     return array 

     function dfs(node) {
         if (node === null) return 

        dfs(node.left)
        dfs(node.right)
        let height = getHeight(node) 
         if (array[height] === undefined) {
            array[height] = []
         }
        array[height].push(node.val) 
       
     }

     function getHeight(node){
        if  (node === null)  return 0
         if (node.left=== null && node.right === null)  return  0 
         if (node.left === null)  return 1+  getHeight(node.right)
         if (node.right === null)  return 1+  getHeight(node.left)
        
         return  1 +Math.max(getHeight(node.left), getHeight(node.right))
    }
}

let  root = new TreeNode(1)
root.left = new TreeNode(2)
root.right = new TreeNode(3)
root.left.left = new TreeNode(4)
root.left.right = new TreeNode(5)

console.log(findLeaves(root))
