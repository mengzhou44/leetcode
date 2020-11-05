function searchRange(nums, target) {
    
    if (nums.length === 1) {
         if (nums[0] === target)  return [0,0]
         return [-1,-1]
    }
   
    let left = 0
    let right = nums.length-1 
    
    while(left<=right) {
         let mid = left+ Math.floor((right-left)/2)
         if (nums[mid] >target) {
             right=mid-1
         } else if (nums[mid] <target) {
             left=mid+1
         } else {
             return helper(mid)
         }
    }
   
    return [-1, -1]
   
    function helper(index) {
     
        let leftBound = index 
        let rightBound = index
        if (index ===0)   {
             while(nums[rightBound+1]===target) {
                rightBound++
             }
        } else if (index === nums.length-1) {
             while(nums[leftBound-1]===target) {
                  leftBound--
             }
        } else {
             while(nums[leftBound-1]===target) {
                  leftBound--
             }
            
             while(nums[rightBound+1]===target) {
                  rightBound++
             }
        }
        
        return [leftBound, rightBound]
    }
}


*******


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function searchRange(nums, target) {
    if (nums === null || nums.length === 0)  return [-1,-1] 
  
    let first =  findFirst(nums,target)
    let second =  findSecond(nums, target)
    
    if (first>second) return [-1,-1]
   
    return [first,second]
}
  
function findFirst(nums,target) {
    let left=0
    let right = nums.length-1 
    
    while(left<=right) {
       let mid = left+ Math.floor((right-left)/2)
       if (nums[mid] <target) {
           left=mid+1
       } else if (nums[mid]>=target) {
           right=mid-1
       }
    }
    
    return left
}

function findSecond(nums,target) {
    let left=0
    let right = nums.length-1 
    while(left<=right) {
       let mid = left+ Math.floor((right-left)/2)
       if (nums[mid] >target) {
           right=mid-1
       } else if (nums[mid]<=target) {
           left=mid+1
       }
    }
    return right 
}


**********

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function searchRange(nums, target) {
    if (nums === null || nums.length === 0)  return [-1,-1] 
  
    let first =  findFirst(nums,target)
    let second =  findSecond(nums, target)
    
    if (first>second) return [-1,-1]
   
    return [first,second]
}
  
function findFirst(nums,target) {
    let left=0
    let right = nums.length-1 
    
    while(left+1<right) {
       let mid = left+ Math.floor((right-left)/2)
       if (nums[mid] <target) {
           left=mid
       } else {
           right=mid
       }
    }
    if (nums[left]   === target) return left 
    if (nums[right] === target) return right 
    return -1
}

function findSecond(nums,target) {
    let left=0
    let right = nums.length-1 
    while(left+1<right) {
       let mid = left+ Math.floor((right-left)/2)
       if (nums[mid] >target) {
           right=mid
       } else {
           left=mid
       }
    }
  
    if (nums[right] === target) return right 
    if (nums[left]  === target) return left 
    return -1
}