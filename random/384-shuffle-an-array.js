class Solution {
    
    constructor(nums) {
        this.original = [...nums]
        this.nums= nums
    }
    
    reset() {
        return this.original
    }
    
    shuffle() {
       let len =this.nums.length 
       for(let i=0; i<len;  i++) {
            let rand = Math.round(Math.random() * (len-1)+ 0)
            let temp = this.nums[i]
            this.nums[i] = this.nums[rand]
            this.nums[rand] =  temp
       }
        return this.nums
    }
    
}

 