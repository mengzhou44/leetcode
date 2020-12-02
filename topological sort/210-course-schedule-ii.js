/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
 
function findOrder(numCourses, prerequisites) {
    let inDegree= new Array(numCourses).fill(0)
    let graph = new Map()
    
    for(let [toTake, prereq] of prerequisites) {
          inDegree[toTake]++
          if (!graph.has(prereq)) {
               graph.set(prereq, [])
          }
          graph.get(prereq).push(toTake)
    }
   
    let queue=[] 
    for(let i=0; i<inDegree.length; i++) {
         if (inDegree[i] === 0) {
              queue.push(i)
         }
    }
    
   let order=[] 
   while(queue.length>0) {
        let course = queue.shift()
        order.push(course)
         
        if (graph.has(course)) {
            for(let toTake of graph.get(course)) {
                 inDegree[toTake]--
                 if (inDegree[toTake] === 0) {
                     queue.push(toTake)
                }
            }
        }
   }
   
   if (order.length ===numCourses) return order 
   
   return [] 
}