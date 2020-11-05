function guessNumber(n) {
    let left = 1 
    let right = n
    
    while(left<right) {
         let mid = left+ Math.floor((right-left)/2)
         let result = guess(mid)
         if  (result=== 0) return  mid
         if (result === -1)  {
             right=mid-1
         } else {
              left = mid+1
         }
    }
    return left 
}