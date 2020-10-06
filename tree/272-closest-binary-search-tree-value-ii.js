// Given a non-empty binary search tree and a target value, find  k  values in the BST that are closest to the target.

// Note:

// Given target value is a floating point.
// You may assume  k  is always valid, that is:  k ≤ total nodes.
// You are guaranteed to have only one unique set of  k  values in the BST that are closest to the target.
// Example:

// Input: root = [4,2,5,1,3], target = 3.714286, and _k_ = 2

//     4
//    / \
//   2   5
//  / \
// 1   3

// Output: [4,3]

class TreeNode {
     constructor(val) {
          this.val = val 
          this.left = null
          this.right = null 
     }
}

function closestKValues(root,  target, k) {
       let array = []
       dfs(root)
       return array
       function dfs(node) {
            if (node === null ) return 
            dfs(node.left)
            
            if (array.length ===k) {
               if (Math.abs(node.val-target)<Math.abs(array[0] -target)) {
                    array.shift()
               } else {
                   return 
               }
            } 
            array.push(node.val)
            
            dfs(node.right)             
        }    
}


function closestKValues1(root,  target, k) {
     let prev= [] 
     let succ =[]
     dfs(root)
     
     let result = []
     function dfs(node) {
        if (node === null) return 
        dfs(node.left)
        if (node.val>target) {
            succ.push(node.val)
        }else {
            prev.unshift(node.val)
        }
        dfs(node.right)
     }
} 



let root = new TreeNode(4)
root.left = new TreeNode(2)
root.left.left = new TreeNode(1)
root.left.right = new TreeNode(3)
root.right = new TreeNode(5)

console.log(closestKValues(root, 3.5, 2))
