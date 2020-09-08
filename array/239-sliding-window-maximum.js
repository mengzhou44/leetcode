function maxSlidingWindow(nums, k) {
    if (k === 1) return nums
    let result = []

    for (let i = 0; i < nums.length - k + 1; i++) {
        result.push(getMax(nums, i, i + k))
    }

    return result
}

function getMax(nums, i, j) {
    let max = nums[i]
    for (let k = i; k < j; k++) {
        max = Math.max(nums[k], max)
    }
    return max
}


**********

function maxSlidingWindow(nums, k) {
   
  if (nums === null || nums.length ===0 || nums.length< k)  return []
  let i=0
  let result =[]
  let dq= new Dequeue() 
  
  while(i<nums.length) {
       
       if (!dq.isEmpty() && dq.peekFirst()=== i-k) {
           dq.pollFirst()
       }
       
       while(!dq.isEmpty() && nums[dq.peekLast()]<= nums[i]) {
          dq.pollLast()
       } 
      
       dq.offerLast(i)
      
       if (i>=k-1) {
           result.push(nums[dq.peekFirst()])
       }
       i++
  }
  
  return result
}

class Dequeue {
  constructor() {
      this.array=[]
  }
  
  isEmpty() {   
      return this.array.length === 0 
  }
  
  peekFirst() {
      return this.array[0]
  }
  
  peekLast() {
      return this.array[this.array.length-1]
  }
  
  pollLast() {
       this.array.pop()
  }
  
  pollFirst() {
      this.array.shift()
  }
  
  offerLast(i) {
       this.array.push(i) 
  }
}
