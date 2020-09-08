class TreeNode {
    constructor(val) {
        this.val =val
        this.left = null 
        this.right =null
    }
}

function traverse1(node){
    let stack=[]
    let result=[]
    while(true) {
         if (node !==null)  {
             stack.push(node)
             node = node.left
         } else {
             if (stack.length === 0) break 
             node = stack.pop()
             result.push(node.val)
             node = node.right
         }
    }
    return result 
 }

function traverse(node) {
    let result = []
    dfs(node)
    return result 
    function dfs(node) {
        if (node === null) return 
        dfs(node.left)
        result.push(node.val)
        dfs(node.right)
    }
}

let root = new TreeNode(12)
root.left = new TreeNode(6)
root.right = new TreeNode(4)
root.left.left = new TreeNode(2)
root.left.right = new TreeNode(3)
root.right.left=  new TreeNode(7)
root.right.right=  new TreeNode(8)

 
console.log(traverse1(root))
console.log(traverse(root))