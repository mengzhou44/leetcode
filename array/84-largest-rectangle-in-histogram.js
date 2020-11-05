 /**
 * @param {number[]} heights
 * @return {number}
 */
function largestRectangleArea(heights) {
    let n = heights.length 
    let max = 0 
     
    let stack = new Stack()
    stack.push(-1)
   
   for(let i=0; i<n; i++) {
        while(stack.peek()!==-1 && heights[i]< heights[stack.peek()]) {
            max = Math.max(max, heights[stack.pop()] *(i-stack.peek()-1))
        }
        stack.push(i)
   }
   
   while(stack.peek()!==-1) {
          max = Math.max(max, heights[stack.pop()] *(n-stack.peek()-1))
   }
        
   return max 
}


class Stack {
    constructor() {
        this.array=[]
    }
    
   peek() {
       return this.array[this.array.length-1]
   }
   
   push(val) {
        this.array.push(val)
   }
   
   pop() {
      return   this.array.pop()
   }
}

   
   