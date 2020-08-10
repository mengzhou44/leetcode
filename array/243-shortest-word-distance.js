function shortestDistance(words, word1, word2) {
    let minDistance = Number.MAX_SAFE_INTEGER
    let word1Index = -1
    let word2Index = -1
    for (let i = 0; i < words.length; i++) {
        if (words[i] === word1) {
            word1Index = i
            updateMinDistance(word1Index, word2Index)
        } else if (words[i] === word2) {
            word2Index = i
            updateMinDistance(word1Index, word2Index)
        }
    }
    return minDistance

    function updateMinDistance(index1, index2) {
        if (index1 !== -1 && index2 !== -1) {
            minDistance = Math.min(minDistance,Math.abs(index2-index1))
        }
    }
}

let words = ['practice', 'makes', 'coding', 'perfect', 'makes']
console.log(shortestDistance(words, 'coding', 'makes'))
