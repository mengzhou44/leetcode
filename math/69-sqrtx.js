function  mySqrt(x) {
    if (x===1 ) return x
    let left =1 
    let right = Math.floor(x/2)
    while(left<=right) {
         let mid = Math.floor((left+right)/2)
         if (mid*mid ===x) return mid
         else if (mid*mid>x) {
             right=mid-1
         } else {
             left=mid+1
         }
    }
    return right
}