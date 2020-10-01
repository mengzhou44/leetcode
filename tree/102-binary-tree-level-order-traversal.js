/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
function levelOrder(root) {
    if (root === null) return [] 
    let array=[root]
    let result=[]
    while(array.length>0) {
         let levelSize = array.length
         let  count = 0 
         let level=[]
         while(count<levelSize) {
              let node = array.shift()
              level.push(node.val)
              if (node.left!== null) {
                   array.push(node.left)
              }
              if (node.right!== null) {
                   array.push(node.right)
              }
             count++
         }
        result.push(level)
    }
    
    return result 
}