function pathSum(root, sum) {
    let paths = []
    dfs(root, sum)
    return paths

    function dfs(node, sum, current = []) {
        if (node === null) return
        current.push(node.val)
        if (node.left === null && node.right === null && node.val === sum) {
            paths.push(current)
            return
        }
        dfs(node.left, sum - node.val, [...current])
        dfs(node.right, sum - node.val, [...current])
    }
}
