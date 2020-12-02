/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
function calcEquation(equations, values, queries) {
    let graph = buildGraph(equations, values)
    let res=[]
    
    for(let query of queries) {
        res.push(evaluate(query,graph))
    }
    return res
}

function evaluate(query, graph) {
   const [a,b]= query 
   
   if (!graph.has(a) || !graph.has(b)) return -1 
    
   if (a === b)  return 1 
   let array= graph.get(a).slice()
   let visited= new Set()
   while(array.length>0) {    
        const [variable,  value] = array.shift()
        visited.add(variable)
        if (variable === b)  return value 
        let neighbors = graph.get(variable)
        for(let [next, nextValue] of neighbors) {
             if (visited.has(next)) continue 
             array.push([next, nextValue*value])
        }
   }
   return -1 
}

function buildGraph(equations, values) {
  let graph = new Map()
  let index=0 
  for(let [a,b] of equations) {
      if (!graph.has(a)) {
           graph.set(a, [])
      }
      graph.get(a).push([b,values[index]])
      if (!graph.has(b)) {
           graph.set(b, [])
      }
      graph.get(b).push([a, 1/values[index]])
      index++
  } 
  return graph 
}