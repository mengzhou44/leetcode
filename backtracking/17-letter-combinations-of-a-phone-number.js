function letterCombinations(digits) {
    if (digits.length === 0) return []
    let result = []
    let map = new Map()
    map.set('2', ['a', 'b', 'c'])
    map.set('3', ['d', 'e', 'f'])
    map.set('4', ['g', 'h', 'i'])
    map.set('5', ['j', 'k', 'l'])
    map.set('6', ['m', 'n', 'o'])
    map.set('7', ['p', 'q', 'r', 's'])
    map.set('8', ['t', 'u', 'v'])
    map.set('9', ['w', 'x', 'y', 'z'])

    dfs(0)

    return result

    function dfs(index, cur = []) {
        if (index > digits.length) return
        if (cur.length === digits.length) {
            result.push(cur.join(''))
            return
        }

        let letters = map.get(digits[index])
        for (let letter of letters) {
            cur.push(letter)
            dfs(index + 1, [...cur])
            cur.pop()
        }
    }
}
