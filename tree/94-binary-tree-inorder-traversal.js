function inorderTraversal(root) {
    let result = []
    dfs(root)
    return result

    function dfs(node) {
        if (node === null) return
        dfs(node.left)
        result.push(node.val)
        dfs(node.right)
    }
}
