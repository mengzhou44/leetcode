// Given a binary tree, return the vertical order traversal of its nodes’ values. (ie, from top to bottom, column by column).

// If two nodes are in the same row and column, the order should be from left to right.

class TreeNode {
     constructor(val) {
          this.val = val 
          this.left = null 
          this.right = null 
     }
}


function verticalOrder(root){
    if (root === null)  return [] 
    let min = 0 
    let max= 0 
    let result = []
    dfs(root, 0)
    for(let i= min; i<=max; i++) {
         result.push([])
    }

    bfs(root)

    return result 
    
    function dfs(root, index=0) {
         if (root === null)  return
         min = Math.min(min, index)
         max=  Math.max(max, index)
         dfs(root.left, index-1)
         dfs(root.right, index+1)
    }
    function bfs(root) {
        let array = [root]
        let columns= [-min] 
        while(array.length>0) {
             let levelSize = array.length 
             let count =0 
             while(count<levelSize) {
                 let node = array.shift()
                 let col = columns.shift()
                 result[col].push(node.val)
                 if (node.left!== null) {
                      array.push(node.left)
                      columns.push(col-1)
                 }
                 if (node.right!== null) {
                    array.push(node.right)
                    columns.push(col+1)
                 }
                 count++
             }
        }
    }
}


// 3
// /\
// /  \
// 9  20
//   /\
//  /  \
// 15   7

let root = new TreeNode(3)
root.left = new TreeNode(9)
root.right = new TreeNode(20)

root.right.left = new TreeNode(15)
root.right.right = new TreeNode(7)

console.log(verticalOrder(root))
