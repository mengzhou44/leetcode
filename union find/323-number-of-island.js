// A 2d grid map of m rows and n columns is initially filled with water.
// We may perform an addLand operation which turns the water at position (row, col) 
// into a land. Given a list of positions to operate, 
// count the number of islands after each addLand operation. 
// An island is surrounded by water and is formed by connecting adjacent 
// lands horizontally or vertically. You may assume all four edges of the grid 
// are all surrounded by water.


function numOfIslands(m, n, positions) {
    if (m<=0 || n<= 0)   return []
   
    let map = new Array(m)
    for(let i=0; i<m; i++) {
        map[i] = new Array(n).fill(false )
    }

    let array = new Array(m*n)
    for(let i=0; i<m*n; i++) {
         array[i] = i 
    }
    let count = 0 
    let res=[]
    for(let [x,y]  of positions) {
         map[x][y] = true 
         count++
         let a  = m*x +y 
         let neighbors= getNeighbors(m,x, y, map)
         for(let nei of neighbors) {
              union(a,nei)
         }
         res.push(count)
    }

    return res 

    function getNeighbors(m, x, y, map) {
         let points= [
             [x-1,y],
             [x+1, y],
             [x,y+1],
             [x, y-1]
         ]
        let result = []
         for(let [a,b] of points) {
              if (a>=0 && a<m && b>=0 && b<n && map[a][b]) {
                 result.push(m*a +b)
              } 
         }
         return result
    }


    function union(a, b) {
        let r1 = find(a)
        let r2 = find(b)
        if (r1 !== r2) {
           count-- 
           array[r1] =r2
        }
    }
   
    function find(a) {
        if (array[a] === a)  return a 
        return find(array[a])
    }
}

console.log(numOfIslands(3,3,[[0,0], [0,1], [1,2], [2,1]]))

