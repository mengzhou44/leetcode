/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
function findTheDifference(s, t) {
    let map = new Map()
    for(let c of s) {
        if (!map.has(c)) {
            map.set(c, 0)
        }
        map.set(c, map.get(c)+1)
    }
    
    for(let c of t) {
        if (!map.has(c)) return c
        let count = map.get(c)
        if (count ===0 ) {
            return c 
        }
        count--
        map.set(c, count)
    } 
}

function findTheDifference(s, t) {
    let val=0
    for(i=0; i<s.length; i++) {
        val = val^s.charCodeAt(i)
        val = val^t.charCodeAt(i)
    }
    return  String.fromCharCode(val^t.charCodeAt(t.length-1))
}

