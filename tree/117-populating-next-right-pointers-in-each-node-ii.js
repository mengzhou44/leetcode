function connect(root) {
    if (root === null) return root
    let array = [root]
    while (array.length > 0) {
        let levelSize = array.length
        let count = 0
        let level = []
        while (count < levelSize) {
            let node = array.shift()
            level.push(node)
            if (node.left !== null) {
                array.push(node.left)
            }
            if (node.right !== null) {
                array.push(node.right)
            }
            count++
        }
        for (let i = 0; i < level.length; i++) {
            if (i !== level.length - 1) {
                level[i].next = level[i + 1]
            } else {
                level[i].next = null
            }
        }
    }
    return root
}
