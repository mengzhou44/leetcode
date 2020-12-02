// There is a new alien language which uses the latin alphabet. However, the order among letters are unknown to you. You receive a list of non-empty words from the dictionary, where words are sorted lexicographically by the rules of this new language. Derive the order of letters in this language.

// Example 1:

// Input:
// [
//   "wrt",
//   "wrf",
//   "er",
//   "ett",
//   "rftt"
// ]

// Output: "wertf"


function alienOrder(words) {
    let inDegree= new Array(26).fill(0)
    let graph = new Map()
    for (let word of words) {
        for(let c of word) {
             if (!graph.has(c)) {
                 graph.set(c, new Set())
             }
        }
    }

 
    for(let i=1; i<words.length; i++) {
         let first= words[i-1] 
         let second = words[i]
         let minLen = Math.min(first.length, second.length)
        
         for(let j=0; j<minLen; j++) {
              if (first[j]!== second[j]) {
                  if (!graph.get(first[j]).has(second[j])) {
                    graph.get(first[j]).add(second[j])
                    inDegree[getCharIndex(second[j])]++
                  }
              }
         }
    }
      
    let queue = []
    for(let i=0; i<inDegree.length; i++) {
         if (inDegree[i] === 0) {
              let letter= getCharByIndex(i)
              if (graph.has(letter)) {
                queue.push(getCharByIndex(i))
              }
         }
    }
    
    let res=[]
    while(queue.length>0) {
        let c= queue.shift()
        res.push(c)
        if (graph.get(c).size >0) {
            for(let letter of graph.get(c)) {  
                let charIndex = getCharIndex(letter)
                inDegree[charIndex] = inDegree[charIndex]-1
                if (inDegree[charIndex] === 0) {
                    queue.push(letter)
                }
            }
        }
    }
   
    return  res.length === graph.size ? res.join('')  : ''
}

function getCharIndex(str) {
     return str.charCodeAt(0) - 'a'.charCodeAt(0)
}

function getCharByIndex(index) {
     return String.fromCharCode(index+ 'a'.charCodeAt(0))
}


let words= [
  "wrt",
  "wrf",
  "er",
  "ett",
  "rftt"
]

console.log(alienOrder(words))