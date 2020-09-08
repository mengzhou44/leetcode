function findMaxConsecutiveOnes(nums) {
    let count = 0
    let max = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            count++
        } else {
            max = Math.max(count, max)
            count = 0
        }
    }
    return Math.max(count, max)
}


// Return the longest run of 1s for a given integer n's binary representation.

// Example:
// Input: 242
// Output: 4
// 242 in binary is 0b11110010, so the longest run of 1 is 4.

function longestRun(n) {
      let count = 0 
      let max = 0 
      while(n>0) {
         let temp = n%2 
         if (temp===1) {
           count++
         }else {
            max = Math.max(count, max)
            count = 0
         }
         n=Math.floor(n/2)
      }
     
      return Math.max(max, count)
}

console.log(longestRun(242))