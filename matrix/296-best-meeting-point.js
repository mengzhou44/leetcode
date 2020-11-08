function minTotalDistance(grid) {
       let arrayX=[]
       let arrayY=[]
       
       for(let i=0; i<grid.length; i++) {
          for(let j=0; j<grid[0].length; j++) {
               if (grid[i][j] === 1) {
                  arrayX.push(i)
                  arrayY.push(j)
               }
          }
       }

       arrayX.sort((a,b)=> a-b)
       arrayY.sort((a,b)=> a-b)
      
       let midX = arrayX[Math.floor((arrayX.length -1)/2)] 
       let midY = arrayY[Math.floor((arrayY.length -1)/2)] 
       
       let distance =0
       for(let x of arrayX) {
           distance += Math.abs(x-midX)
       }
       for(let y of arrayY) {
           distance += Math.abs(y-midY)
       }

       return distance 
}

console.log(minTotalDistance([
    [1,0,0,0,1],
    [0,0,0,0,0],
    [0,0,1,0,0]
]))

 