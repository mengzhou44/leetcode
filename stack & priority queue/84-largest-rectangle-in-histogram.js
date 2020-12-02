/**
 * @param {number[]} heights
 * @return {number}
 */
function  largestRectangleArea(heights) {
    
    if (heights === null || heights.length === 0)  return 0 
    let n = heights.length 
    let stack = []
    let  max= 0 
    stack.push(-1)
    for(let i=0;i<heights.length; i++) {
         while(stack[stack.length-1] !== -1 && heights[stack[stack.length-1]]>= heights[i]) {
             let height  = heights[stack.pop()]
             let width =  i-stack[stack.length-1] -1 
             max = Math.max(height*width, max)
         }
         stack.push(i)
    }
    
    while(stack.length>1) {
             let height  = heights[stack.pop()]
             let width =  n-stack[stack.length-1] -1 
             max = Math.max(height*width, max)
            
    }

    return max 
}

