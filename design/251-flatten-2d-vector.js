// Implement an iterator to flatten a 2d vector.

// For example,
// Given 2d vector =

// [
//   [1,2],
//   [3],
//   [4,5,6]
// ]
// By calling next repeatedly until hasNext returns false, the order of elements returned by next should be: [1,2,3,4,5,6].



class Vector2D {
     constructor(arrays) {
         this.queue =[] 
         for(let array of arrays) {
             for(let item of array) {
                 this.queue.push(item)
             }
         }
         this.currentIndex= 0 
     }

     next() {
        return this.queue[this.currentIndex++]
     }

     hasNext() {
        return this.currentIndex<this.queue.length-1 
     }
}