function getSkyline(buildings) {
    let array=[] 
    let index=0
    for(let [left, right, height] of buildings ) {     
        array.push({x:left, height: -height })
        array.push({x:right, height: height})
    }
    
    let result=[]
    array.sort((a,b)=>  a.x === b.x ? a.height-b.height : a.x-b.x)
   
    let queue=[
       0
    ]
    let prevHeight= 0
    for(let {x,height} of array){ 
        if (height<0) {
             queue=addToQueue(queue, -height)  
        } else {
             queue= removeFromQueue(queue, height)
        }
        let curHeight = queue[0]
        if (prevHeight !== curHeight) {
            result.push([x, curHeight])
        }
        prevHeight =curHeight
    }
    
    return result 
}

function addToQueue(queue, height) {
  
    let i
    
    for(i=queue.length-1; i>=0; i--) {
          if (queue[i]<height) {
              queue[i+1] = queue[i]
          } else {
              break
          }
    }
    
    queue[i+1] = height
    return queue 
}

function removeFromQueue(queue, height) {
     let removed = false 
     let result =[]
     for(let item of queue) {
          if (item === height && removed === false) {
              removed = true  
          } else {
              result.push(item)
          }
     }
    return result 
}

