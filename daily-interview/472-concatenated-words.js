function findAllConcatenatedWordsInADict(words) {
    let result = []
    for (let i = 0; i < words.length; i++) {
        let filtered = words.filter((item, index) => index != i)
        if (canBreak(words[i], filtered)) {
            result.push(words[i])
        }
    }

    return result

    function canBreak(word, list) {
        if (word === '') return true
        for (choice of list) {
            if (word.startsWith(choice)) {
                let newWord = word.substring(choice.length)
                if (canBreak(newWord, list)) {
                    return true
                }
            }
        }

        return false
    }
}
