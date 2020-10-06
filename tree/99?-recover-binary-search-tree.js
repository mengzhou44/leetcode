class TreeNode {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

function recoverTree(root) {
    let array = []
    let firstNode = null
    let secondNode = null
    let firstTime = true

    dfs(root)
 
    let temp = firstNode.val
    firstNode.val = secondNode.val
    secondNode.val = temp
    
    function dfs(root) {
        if (root === null) return
        dfs(root.left)
        array.push(root)
        compare()
        dfs(root.right)
    }

    function compare() {
        if (array.length < 2) return
        if (firstNode === null || secondNode === null) {
            let current = array[array.length- 1]
            let prev = array[array.length - 2]
            if (prev.val > current.val && firstTime) {
                firstNode = prev
                firstTime = false
            }

            if (prev.val > current.val && firstTime === false) {
                secondNode = current
            }
        }
    }
}

let root = new TreeNode(1)
root.left = new TreeNode(3)
root.left.right = new TreeNode(2)

recoverTree(root)
 
