/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
function findMinHeightTrees(n, edges) {
    
    if (n === 1)  return [0]
    let degrees = new Array(n).fill(0)
    let graph = new Map()
    for(let i=0; i<n; i++) {
        graph.set(i, [])
    }
    
    for(let [from, to] of edges) {
          graph.get(from).push(to)
          graph.get(to).push(from)
          degrees[from]++
          degrees[to]++
     }
   
     let queue=[]
     for(let i=0; i<n; i++) {
          if (degrees[i] === 1) {
              queue.push(i)
          }
     }
 
     let result=[]
 
     while(queue.length>0) {
         list =[] 
         
         let count = 0
         let levelSize = queue.length
         while(count<levelSize) {
              let node = queue.shift()
              list.push(node)
              for(let nei of graph.get(node)){
                   degrees[nei]--
                   if (degrees[nei] ===1) {
                       queue.push(nei)
                   }
              }
              count++
         }
         result=list
     }
    
     return result 
}

 