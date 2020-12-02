 

class Solution {
      
    constructor(head) {
        this.head = head 
        this.count = this.countSize()
    }
    
    getRandom() {
       let rand = Math.floor(this.count* Math.random())
       let cur = this.head
       let index = 0 
       while(index<rand) {
           cur = cur.next 
           index++
       }
       return cur.val
    }
    
    countSize() {
        let temp = this.head 
        let count = 0
        while(temp!==null) {
             count++
             temp = temp.next 
        }
        
        return count 
    }
}


 

class Solution {
      
    constructor(head) {
        this.head = head 
        this.array = this.getArray(head)
    }
    
    getRandom() {
       let rand = Math.floor(Math.random()* this.array.length)
       return this.array[rand]
    }
    
    getArray(head) {
       let array= [] 
       while(head!==null) {
           array.push(head.val)
           head = head.next 
       }
        return array 
    }
}


