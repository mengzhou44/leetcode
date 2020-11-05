function numDecodings(s) {
    let dp = new Array(s.length+1).fill(0)
    dp[0] = 1 
    dp[1] = s[0] === '0'? 0 : 1
    
    for(let i=2;i<dp.length;i++) {
        let oneDigit = parseInt(s[i-1])
        let twoDigits = parseInt(s[i-2] +s[i-1])
        
        if (oneDigit>=1) {
             dp[i] = dp[i-1]
        } 
        
        if (twoDigits>=10 && twoDigits<=26) {
             dp[i] +=dp[i-2]
        }
    }
  
    return dp[s.length]
    
}