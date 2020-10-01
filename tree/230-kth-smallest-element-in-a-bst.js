function kthSmallest(root, k) {
    let count = 0
    let result
    dfs(root)
    function dfs(node) {
        if (node === null) return
        dfs(node.left)
        count++
        if (count === k) {
            result = node.val
            return
        }
        dfs(node.right)
    }
    return result
}
