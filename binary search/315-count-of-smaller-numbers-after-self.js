/**
 * @param {number[]} nums
 * @return {number[]}
 */
class TreeNode {
     
    constructor(val) {
        this.val = val 
        this.count = 1 
        this.leftCount = 0
        this.left = null 
        this.right = null
    }
    
    lessOrEqual() {
         return this.count+this.leftCount
    }
}

function countSmaller(nums) {
    if (nums.length === 0) return []
    nums = nums.reverse()
    let root = new TreeNode(nums[0]) 
    let result = [0]
    for(let i=1; i<nums.length; i++) {  
        result.push(insert(root,nums[i]))
    }
    
    return result.reverse()
}

function insert(node,num) {
    if (num === node.val) {
         node.count++
        return node.leftCount
    }
    else if (num<node.val) {
        node.leftCount++
        if (node.left === null) {
             node.left = new TreeNode(num)
             return 0      
        }
        
        return insert(node.left, num)
    }
    
    else {
          if (node.right === null) {
               node.right = new TreeNode(num)
              return node.lessOrEqual()
          }
         return node.lessOrEqual()+ insert(node.right,num)
    } 
   
}