function wordBreak(s, words) {
    if (s === null || s.length === 0) return []

    return helper(0)

    function helper(start, cache = new Map()) {
        if (cache.has(start)) {
            return cache.get(start)
        }

        let result = []
        for (let i = start + 1; i <= s.length; i++) {
            let word = s.substring(start, i)
            if (words.includes(word)) {
                const temp = helper(start + word.length, cache)
                for (let r of temp) {
                    let combined = `${word} ${r}`
                    result.push(combined)
                }
            }
        }
        let word = s.substring(start, s.length)
        if (words.includes(word)) {
            result.push(word)
            
        }

        cache.set(start, result)
        return result
    }
}
