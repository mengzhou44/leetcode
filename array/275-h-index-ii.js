function hIndex(citations) {
  let n = citations.length
  let l = 0 
  let r = n-1 
  
   while(l<=r) {
       let mid = Math.floor((l+r)/2)
       if (citations[mid]< n-mid) {
           l=mid+1
       } else {
           r=mid-1
       }
   }
   return n-l
}