function maxAreaOfIsland(grid) {
    let max = 0
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            max = Math.max(max, dfs(i, j))
        }
    }

    return max

    function dfs(i, j) {
        if (i < 0 || i > grid.length - 1) return 0
        if (j < 0 || j > grid[i].length - 1) return 0

        if (grid[i][j] === 0) return 0

        grid[i][j] = 0
        let sum = 1
        sum += dfs(i, j + 1)
        sum += dfs(i, j - 1)
        sum += dfs(i + 1, j)
        sum += dfs(i - 1, j)

        return sum
    }
}
