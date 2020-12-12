class ZigZagIterator {
      constructor(arrays) {
         let queue=[]
         while(true) {
            arrays = arrays.filter(array=> array.length>0)
            if (arrays.length ===0) break 
            for(let i=0; i<arrays.length; i++) {
                if (arrays[i].length>0) {
                    queue.push(arrays[i].shift())
                }
            }
         } 
        
          this.queue= queue  
          this.currentIndex = 0 
      }
      
      next() {
          return this.queue[this.currentIndex++]
      }

     hasNext() {
         return this.currentIndex<this.queue.length 
     }
    
}

let iterator = new ZigZagIterator([
    [1,2,3],
    [4,5,6,7],
    [8,9]
])

for(let i=0; i<9; i++) {
    console.log(iterator.next())
}
