function  trap(height) {
  if (height.length  <3)  return 0 
 
  
  let peakIndex = 0
  for(let i=0; i<height.length; i++) {
      if (height[i]> height[peakIndex]) {
            peakIndex = i
      }
  }
  let water = 0 
  let leftMostBar= 0 
  for(let i=0; i<peakIndex; i++) {
      if (height[i]>height[leftMostBar]) {
             leftMostBar = i
      } else {
           water+=height[leftMostBar] - height[i]
      }
  }
  
  let rightMostBar= height.length -1  
  for(let i= height.length -1; i>peakIndex;i--) {
      if (height[i]>height[rightMostBar]) {
             rightMostBar = i
      } else {
           water+=height[rightMostBar] - height[i]
      }
  }
  
  return water 
}