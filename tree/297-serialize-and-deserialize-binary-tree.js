function serialize(root) {
    if (root === null) return []
    let array = []
    dfs(root)
    function dfs(root) {
        if (root === null) {
            array.push(null)
            return
        }
        array.push(root.val)
        dfs(root.left)
        dfs(root.right)
    }
    return array
}


function deserialize(data) {
    if (data.length === 0) return null

    let root = new TreeNode(data.shift())
    let node = root
    dfs(node)

    return root

    function dfs(node) {
        if (node === null) return
        let temp = data.shift()
        if (temp !== null) {
            node.left = new TreeNode(temp)
            dfs(node.left)
        }

        temp = data.shift()
        if (temp !== null) {
            node.right = new TreeNode(temp)
            dfs(node.right)
        }
    }
}
