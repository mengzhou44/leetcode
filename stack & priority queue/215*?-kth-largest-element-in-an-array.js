/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function findKthLargest(nums, k) {
    let array=[] 
    
    for(let num of nums){
        if (array.length ===0) {
            array.push(num)
        } else {
           array =  addNumToArray(array, num)
        }
    }
     
    return array[array.length-1]
        
    function addNumToArray(array, num) {
        let i
        for(i=array.length-1; i>=0; i--) {
             if (array[i]<num) {
                 array[i+1]= array[i] 
             } else {
                 break
             }
        }
        
        array[i+1]=num
        
        if (array.length>k) {
           array.pop()
        }
        
        return array 
    }
    
}