 
class RandomizedSet {
    constructor() {
        this.map = new Map()
        this.array=[] 
    }
    
    insert(val){
         if (this.map.has(val)) return false 
         this.array.push(val)
         this.map.set(val, this.array.length-1)
         return true 
    }
 
    remove(val){
         if (!this.map.has(val)) return false 
         let last= this.array[this.array.length-1]
         let lastIndex = this.map.get(last)
         let valIndex =this.map.get(val)
         if (lastIndex !== valIndex) {
              this.map.set(last,valIndex)
              let temp = this.array[lastIndex]
              this.array[lastIndex]= this.array[valIndex]
              this.array[valIndex]  = temp       
         } 
         this.array.pop()
         this.map.delete(val)
         return true 
   }
  
    getRandom() {
        return this.array[Math.floor(Math.random() * this.array.length)]
    }

}