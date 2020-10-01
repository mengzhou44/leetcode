function preorderTraversal(root) {
    let result = []
    dfs(root)
    return result
    function dfs(node) {
        if (node === null) return
        result.push(node.val)
        dfs(node.left)
        dfs(node.right)
    }
}
