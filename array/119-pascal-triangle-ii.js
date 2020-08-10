function getRow(rowIndex) {
    if (rowIndex === 0) return [1]
    if (rowIndex === 1) return [1, 1]

    let prev = getRow(rowIndex - 1)
    let result = [1]
    for (let i = 0; i < prev.length - 1; i++) {
        result.push(prev[i] + prev[i + 1])
    }
    result.push(1)
    return result
}
