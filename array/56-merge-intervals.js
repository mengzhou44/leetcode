*/
function merge(intervals) {
    if (intervals.length === 0)  return []
    
     intervals.sort((a,b)=> a[0]-b[0]) 
    
     let result =[] 
     
     let count = 0
     let current = intervals.shift()
     
     while(intervals.length>0) {
           
           let next = intervals.shift()
           if (current[1]<next[0]) {
               result.push(current)
               current= next
           } else  {
               current[1] = Math.max(current[1], next[1])
           } 
           
     }
     result.push(current)
    
     return result 
}
    
    