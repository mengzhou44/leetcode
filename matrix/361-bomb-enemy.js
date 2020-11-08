// function maxKilledEnemies(grid) {
//      if (grid === null || grid.length === 0)  return 0 

//      let m = grid.length 
//      let n = grid[0].length
//      let max =0
//      for(let i=0; i<m; i++) {
//          for(let j=0; j<n; j++) {
//                if (grid[i][j] === '0') {
//                    max= Math.max(max,findEnemiesToKill(grid, i,j))
//                }
//          }
//      }
//      return max 
// }


// function findEnemiesToKill(grid, row,col) {
//     let count = 0 
//     moveLeft(row,col)
//     moveRight(row,col)
//     moveUp(row,col)
//     moveDown(row,col)
    
//     return count 
//     function moveLeft(row,col) {
//         while(col>=0 && grid[row][col] !== 'W') {
//             if (grid[row][col] === 'E') {
//                 count++
//             }
//             col--
//         }
//     } 

//     function moveRight(row,col) {
//         while(col<grid[0].length && grid[row][col] !== 'W') {
//             if (grid[row][col] === 'E') {
//                 count++
//             }
//             col++
//         }
//     } 

//     function moveUp(row,col) {
//         while(row>=0 && grid[row][col] !== 'W') {
//             if (grid[row][col] === 'E') {
//                 count++
//             }
//             row--
//         }
//     } 

//     function moveDown(row,col) {
//         while(row<grid.length && grid[row][col] !== 'W') {
//             if (grid[row][col] === 'E') {
//                 count++
//             }
//             row++
//         }
//     } 
// }

// console.log(maxKilledEnemies([
//    ['0', 'E', '0', '0'],
//    ['E', '0', 'W', '0'],
//    ['0', 'E', '0', '0']
// ]))
 


function maxKilledEnemies(grid) {
    if (grid === null || grid.length === 0)  return 0 

    let m = grid.length 
    let n = grid[0].length
    let max = 0 
    let cols = new Array(n).fill(0)

    for(let i=0; i<m; i++) {
        let rows= 0 
        for(let j=0; j<n; j++) {
             if (grid[i][j] === '0') {
                  let total = rows+cols[j]
                  for(let k=j+1; k<n && grid[i][k] !== 'W'; k++) {
                       if (grid[i][k] === 'E') {
                             total++
                       }
                  } 
                  for(let k=i+1; k<m && grid[k][j]!== 'W'; k++) {
                        if (grid[k][j] === 'E') {
                            total++
                        }
                  } 
                   max = Math.max(max, total)
             } else if (grid[i][j] === 'W') {
                   cols[j] = 0
                   rows=0
             } else if (grid[i][j] === 'E') {
                cols[j]++
                rows++
            } 
        }
    }
   
    return max 
}

console.log(maxKilledEnemies([
   ['0', 'E', '0', '0'],
   ['E', '0', 'W', '0'],
   ['0', 'E', '0', '0']
]))