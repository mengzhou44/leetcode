function binaryTreePaths(root) {
    if (root === null) return []
    let result = []
    dfs(root)

    return result

    function dfs(node, current = []) {
        if (node === null) return
        current.push(node.val)
        if (node.left === null && node.right === null) {
            result.push(current.join('->'))
            return
        }
        dfs(node.left, [...current])
        dfs(node.right, [...current])
    }
}
