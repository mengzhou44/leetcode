function getHint(secret, guess) {
    let map = new Map()

    for (let i = 0; i < secret.length; i++) {
        if (!map.has(secret[i])) {
            map.set(secret[i], 1)
        } else {
            map.set(secret[i], map.get(secret[i]) + 1)
        }
    }
    let count = 0
    for (let c of guess) {
        if (map.has(c) && map.get(c) > 0) {
            count++
            map.set(c, map.get(c) - 1)
        }
    }
    let bulls = 0
    for (let i = 0; i < guess.length; i++) {
        if (guess[i] === secret[i]) {
            bulls++
        }
    }
    let cows = count - bulls

    return `${bulls}A${cows}B`
}
