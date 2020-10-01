class BSTIterator {
    constructor(root) {
        this.root == root
        this.array = []
        this.dfs(root)
    }

    next() {
        return this.array.shift()
    }

    hasNext() {
        return this.array.length > 0
    }

    dfs(root) {
        if (root === null) return
        this.dfs(root.left)
        this.array.push(root.val)
        this.dfs(root.right)
    }
}
