// Given n nodes labeled from 0 to n - 1 and a list of undirected edges 
// (each edge is a pair of nodes), write a function to find the number of 
// connected components in an undirected graph.

function countComponents(n, edges) {
    let parents = new Array(n).fill(-1)

    for(let [a,b] of edges ) {
         let x= find(parents, a)
         let y = find(parents, b)

         if (x!==y) {
             parents[y] =x
         }
    }
    console.log(parents)
    let count = parents.filter(item=> item === -1).length 
     
    return count

}

function find(parents, i) {
     if (parents[i] === -1 ) return i
     return find(parents, parents[i])
}


console.log(countComponents(5, [[0,1], [1,2], [3,4]]))
console.log(countComponents(5, [[0,1], [1,2],[2,3], [3,4]]))