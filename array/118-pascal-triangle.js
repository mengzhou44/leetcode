/**
 * @param {number} numRows
 * @return {number[][]}
 */
function generate(numRows) {
    if (numRows === 0) return []
    if (numRows === 1) return [[1]]

    let temp = generate(numRows - 1)
    let newRow = helper(temp[temp.length - 1])

    temp.push(newRow)

    return temp

    function helper(previous) {
        let result = [1]
        for (let i = 0; i < previous.length - 1; i++) {
            result.push(previous[i] + previous[i + 1])
        }
        result.push(1)

        return result
    }
}
****************


function generate(numRows) {
    if (numRows === 0) return []
    if (numRows === 1) return [[1]]
    let result = [[1]]
    for (let row = 1; row < numRows; row++) {
        let prev = result[result.length - 1]
        let newRow = helper(prev)
        result.push(newRow)
    }
    return result

    function helper(row) {
        let newRow = [1]
        for (let i = 0; i < row.length - 1; i++) {
            newRow.push(row[i] + row[i + 1])
        }
        newRow.push(1)
        return newRow
    }
}
