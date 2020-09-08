function leafSimilar(root1, root2) {
    let array = []
    dfs(root1, 1)
    return dfs(root2, 2)

    function dfs(root, visits) {
        if (root === null) return true

        if (root.left === null && root.right === null) {
            if (visits === 1) {
                array.push(root.val)
            } else {
                let val = array.shift()
                if (val !== root.val) {
                    return false
                }
            }
        }
        return dfs(root.left, visits) && dfs(root.right, visits)
    }
}
