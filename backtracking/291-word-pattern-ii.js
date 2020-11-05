// Given a pattern and a string str, find if str follows the same pattern.

// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty substring in str.

// Examples:

// pattern = "abab", str = "redblueredblue" should return true.
// pattern = "aaaa", str = "asdasdasdasd" should return true.
// pattern = "aabb", str = "xyzabcxzyabc" should return false.
// Notes:
// You may assume both pattern and str contains only lowercase letters.


function wordPatternMatch(pattern, str){
    let map = new Map()
    return search(pattern,str)
     
     function  search(pattern,str) {
          if (pattern.length === 0 && str.length === 0) {
                return true 
          }

          if (pattern.length === 0 || str.length === 0) {
            return  false
          }
           let ch = pattern[0]
           if (map.has(ch)) {
                let word = map.get(ch)
                if (!str.startsWith(word)){
                     return false 
                }
                return search(pattern.substring(1),  str.substring(word.length))
              
           } else {
                for(let i=0; i<str.length; i++) {
                     let word = str.substring(0, i+1)
                     map.set(ch, word)
                     if (search(pattern.substring(1),  str.substring(word.length))) {
                          return true 
                     }
                     map.delete(ch)
                }
           }

           return false 
     }
}

 
console.log(wordPatternMatch("abab", "redblueredblue"))
console.log(wordPatternMatch("aaaa", "asdasdasdasd"))
console.log(wordPatternMatch("aabb", "xyzabcxzyabc"))

 