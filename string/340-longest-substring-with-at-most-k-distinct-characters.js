// Given a string, find the length of the longest substring T that contains at most k distinct characters.

// For example, Given s = “eceba” and k = 2,

// T is "ece" which its length is 3.


function lengthOfLongestSubstringKDistinct(s, k) {

    if (s.length === 0 || s===null) return  0

    let map = new Map()
    let maxLength = 0
    let left= 0 
    let right = 0  
    
    for(right=0; right<s.length; right++) {
          if (!map.has(s[right])) {
              map.set(s[right], 1)
          } else {
             map.set(s[right], map.get(s[right])+1)
          }   
          
          while(map.size>k) {
              if (left<right && map.get(s[left])>0) {
                 map.set(s[left], map.get(s[left])-1)
              }
              if (map.get(s[left]) === 0) {
                map.delete(s[left])
              }
              left++
          }
          maxLength =Math.max(maxLength, right-left+1)
    }
    return maxLength 
}


console.log(lengthOfLongestSubstringKDistinct('eceba', 2))
