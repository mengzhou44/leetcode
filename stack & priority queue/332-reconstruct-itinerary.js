/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
function  findItinerary(tickets) {
    let g= buildGraph(tickets)  
    let result =[] 
    dfs(g,result, 'JFK')  
    return result 
}

function dfs(g, result, from) {
 
   let toList = g.get(from)
   while(toList!==undefined && toList.length> 0) {
        let to = toList.shift()
        dfs(g,result,  to)
   }
   result.unshift(from)
}

function buildGraph(tickets){
    let result= new Map()
    for(let [from, to ] of tickets) {
        if (!result.has(from)) {
            result.set(from, [])
        }
        
        result.get(from).push(to)
        
        result.get(from).sort((a,b)=> {
            if (a === b)  return 0 
            if (a> b)  return 1 
            return -1 
        })
    }
   
    return result 
}