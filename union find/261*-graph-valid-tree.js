// Given n nodes labeled from 0 to n - 1 and a list of undirected edges (each edge is a pair of nodes), write a function to check whether these edges make up a valid tree.

// For example:

// Given n = 5 and edges = [[0, 1], [0, 2], [0, 3], [1, 4]], return true.

// Given n = 5 and edges = [[0, 1], [1, 2], [2, 3], [1, 3], [1, 4]], return false.

 


// solution 1   DFS  
// function validTree(n, edges) {
//      let graph = new Map()
//      for(let i=0; i<n; i++) {
//           graph.set(i, [])
//      }
//      for(let [a,b] of edges) {
//           graph.get(a).push(b)
//      }
//      let visited= new Array(n).fill(false)

//      if (dfs(graph, visited, 0,  -1) === false) return false 

//      for(let item of visited) {
//           if (item === false) return false 
//      }
  
//     return true 
// }

// function dfs(graph, visited, cur, prev) {
//      if (visited[cur] === true)  return false 

//      visited[cur] = true 

//      for(let nei of graph.get(cur)) {
//           if (nei!== prev) {
//                if (!dfs(graph, visited, nei, cur))  return false 
//           }
//      }
//      return true 
// }



//  solution 2   BFS  
// function validTree(n, edges) {
//      let graph = new Map()
//      for(let i=0; i<n; i++) {
//           graph.set(i, [])
//      }
//      for(let [a,b] of edges) {
//           graph.get(a).push(b)
//           graph.get(b).push(a)
//      }
//     let visited= new Set()
//     visited.add(0)
//     let queue = [0] 
//     while(queue.length>0) {
//         let node = queue.shift()
//         for(let nei of graph.get(node)){
//             if (visited.has(nei)) return false 
//             visited.add(nei)
//             queue.push(nei)
//             graph.set(nei, graph.get(nei).filter(item=> item!== node))
//         }
//     }

//     return  visited.size === n 
// }


//solution 3   union find 

//  function validTree(n, edges) {
//      if (edges.length !== n-1)  return false 

//      let parents = new Array(n).fill(-1)

//      for(let i=0; i<edges.length; i++) {
//           let x= find(parents, edges[i][0])
//           let y= find(parents, edges[i][1])
//           if (x === y)  return false 
//           parents[y] = x 
//      }
//      return true 
//  }

//  function find(parents, i) {
//       if (parents[i] === -1) return i
//       return find(parents, parents[i])
//  }

function validTree(n, edges) {
      let graph = new Map()
      for(let i=0; i<n; i++) {
            graph.set(i, [])
      } 
      for(let [a,b] of edges) {
           graph.get(a).push(b)
           graph.get(b).push(a)
      }
      let visited = new Set()
      visited.add(0)
      let queue=[0]
      while(queue.length>0) {
           let cur = queue.shift()
           for(let nei of graph.get(cur)) {
                if (visited.has(nei)) return false 
                visited.add(nei)
                queue.push(nei)
                graph.set(nei, graph.get(nei).filter(item=> item!==cur))
           }
      }
      return true 
}



console.log(validTree(5, [[0, 1], [0, 2], [0, 3], [1, 4]]))
console.log(validTree(5, [[0, 1], [1, 2], [2, 3], [1, 3], [1, 4]]))
