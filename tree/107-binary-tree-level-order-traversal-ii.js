function levelOrderBottom(root) {
    if (root === null) return []
    let array = [root]
    let result = []
    while (array.length > 0) {
        let level = []
        let levelSize = array.length
        let count = 0
        while (count < levelSize) {
            let node = array.shift()
            if (node !== null) {
                level.push(node.val)
                if (node.left !== null) {
                    array.push(node.left)
                }
                if (node.right !== null) {
                    array.push(node.right)
                }
            }
            count++
        }
        result.unshift(level)
    }
    return result
}
