 

class Solution  {
    constructor(nums) {
         this.nums = nums 
    }
   
    pick(target) {
        let pos=[]
        for(let i = 0; i<this.nums.length; i++) {
             if (this.nums[i] === target) {
                  pos.push(i)
             }
        }
        
        let index=  Math.floor( Math.random()* pos.length)
        return pos[index] 
    }
}