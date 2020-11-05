function findMin(nums) {
    return find(0, nums.length-1)

    function find(left,right) {
         if (left>= right) {
              return nums[left]
         }  
        
         if (left+1 === right) {
              return Math.min(nums[left], nums[right])
         }
        
         let mid = left+ Math.floor((right-left)/2)
         
         return Math.min(find(left,mid) ,find(mid+1,right))
         
    }

}