/**
 * @param {number[][]} points
 * @return {number}
 */
function  maxPoints(points) {
    if (points.length<2)    return points.length
    let max=1 
    let n= points.length
    let visited= new Set()
    for(let i=0; i<n; i++) {
         let pointId = getPointId(points[i])
         if (visited.has(pointId)) continue 
         
          let map = new  Map()
          let localMax= 1
          let same= 0 
          for(let j= i+1; j<n; j++) {
              if (isSame(points[i], points[j])) {
                  same++
                  continue
              }
              let slope = getSlope(points[i], points[j])
              if (!map.has(slope)) {
                  map.set(slope, 2)
              } else {
                  map.set(slope, map.get(slope)+1)
              }
              localMax= Math.max(localMax, map.get(slope))    
         }
        
         visited.add(pointId)
         max = Math.max(max, localMax+same)
    }
    
    return max 
    
    function getPointId([x,y]) {
         return x+ '-' + y
    }
    
    function isSame([x0, y0], [x1, y1]) {
         return x0 === x1 &&  y0 === y1
    }
     
    function getGCD(a, b) {
         return b === 0 ? a : getGCD(b, a % b);
    }    
    
    function getSlope(p1, p2) {
        var xDiff = p1[0] - p2[0];
        var yDiff = p1[1] - p2[1];
        if (xDiff === 0) return 'y';
        if (yDiff === 0) return 'x';
        var gcd = getGCD(xDiff, yDiff);
        xDiff /= gcd;
        yDiff /= gcd;
        return `${xDiff}/${yDiff}`;
    }

}

