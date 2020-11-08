function shortestDistance(grid) {
    
       if (grid === null || grid.length === 0)  return 0 

       let m = grid.length 
       let n = grid[0].length 
       let min= Number.MAX_SAFE_INTEGER  

       for(let i=0; i<m; i++) {
            for(let j=0; j<n; j++) {
                if (grid[i][j] === 0 ) { 
                    min = Math.min(min, bfs(i,j, grid))
                }
            }
       }
       return min 
       
       function bfs(i,j, grid) {
            let  array = [[i,j]]
            let  visited = new Array(grid.length)
            for(let i=0; i<visited.length; i++) {
                visited[i] = new Array(grid[0].length).fill(false)
            } 
            let distance = 0 
            let level = 0 
            while(array.length>0) {            
                 let levelSize = array.length 
                 let count= 0 
                 while(count<levelSize) {
                    let [curX,curY] = array.shift()
                    let val =grid[curX][curY]
                    if (val ===1) {
                        distance +=level
                    }
                    visited[curX][curY] = true
                    if (isValid(curX-1, curY,visited, grid, array)) {
                        array.push([curX-1,curY])
                    }
                    if (isValid(curX+1, curY,visited, grid,array)) {
                        array.push([curX+1,curY])
                    }
                    if (isValid(curX, curY-1,visited, grid, array)) {
                        array.push([curX,curY-1])
                    }
                    if (isValid(curX, curY+1,visited, grid, array)) {
                        array.push([curX,curY+1])
                    }
                    count++
                 }
                 level++
            }
            return distance
       }
}

function isValid(i,j, visited, grid, array) {
     if (i<0 || i>grid.length-1)  return false 
     if (j<0 || j>grid[0].length-1)  return false 
     
     if (visited[i][j] === true) return false 
     
     if (grid[i][j] === 2)  return false  
     let found = array.filter(([x,y]) => x === i && y === j)
     if (found.length === 1)  return false 
     return true 
}

console.log(shortestDistance([
    [1, 0, 2, 0, 1], 
    [0, 0, 0, 0, 0], 
    [0, 0, 1, 0, 0]
]))

 