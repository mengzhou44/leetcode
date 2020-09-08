function getTargetCopy(original, cloned, target) {
    let result = null
    dfs(original, cloned)
    return result

    function dfs(cur1, cur2) {
        if (cur1 === null || cur2 === null) return
        if (cur1 === target) {
            result = cur2
            return
        }

        dfs(cur1.left, cur2.left)
        dfs(cur1.right, cur2.right)
    }
}
