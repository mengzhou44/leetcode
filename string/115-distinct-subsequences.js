*/

function numDistinct(s, t) {
  if (s=== null || s.length === 0)  return 0 
 
  let ls = s.length 
  let lt = t.length 
  let dp = new Array(lt+1)
  for(let i=0; i<dp.length; i++) {
       if (i===0) {
            dp[i] =  new Array(ls+1).fill(1)
       }else {
            dp[i] =  new Array(ls).fill(0)
       }
  }

 for(let i=1; i<=lt; i++) {
      for(let j=1; j<=ls; j++) {
           if (t[i-1] === s[j-1]) {
                dp[i][j]= dp[i-1][j-1] +dp[i][j-1]
           } else {
                dp[i][j]= dp[i][j-1]
           }
      }
 }
 
 return dp[lt][ls]
}


function numDistinct(s, t) {
 
    let result = 0 
    dfs([], 0)
    return result 
    
    function dfs(current=[],index=0) {
          if (index>s.length)  return 

          if (current.length  === t.length) {
               result++
               return 
          }
        
          let temp = t[current.length]
       
          while(index<s.length && s[index]!==temp){
               index++
          }
          dfs([...current, temp], index+1)
          if (s.substring(index+1).includes(temp)) {
                 dfs(current, index+1)  
          }      
    }
}