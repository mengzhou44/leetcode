// There is a fence with n posts, each post can be painted with one of the k colors.

// You have to paint all the posts such that no more than two adjacent fence posts have the same color.

// Return the total number of ways you can paint the fence.

// Note: n and k are non-negative integers.

function numOfWaysPaintFence(n, k) {
     if (n === 0)  return 0 
     if (n ===1) return  k
     
     let same = k
     let diff = k*(k-1)

     for(let i=3; i<=n ;i++) {
           let prevDiff = diff
           diff = (same+diff) * (k-1)
           same = prevDiff
     }
     return same+diff
}

console.log(numOfWaysPaintFence(3,2))


// given that if at i  paint color m,  and i-1 the color is not m that at i+1 i CAN PAIN ALL Colors including m
