// Given a non-empty string str and an integer k, rearrange the string such that the same characters are at least distance k from each other.

// All input strings are given in lowercase letters. If it is not possible to rearrange the string, return an empty string "".

// Example 1: str = "aabbcc", k = 3

// Result: "abcabc"

// The same letters are at least distance 3 from each other. Example 2: str = "aaabc", k = 3

function rearrangeString(str, k) {
  let map = new Map();
  for (let c of str) {
    if (!map.has(c)) {
      map.set(c, 1);
    } else {
      map.set(c, map.get(c) + 1);
    }
  }
   
   let pq = new PriorityQueue((a,b)=>  {
      if (a.count === b.count) {
            if (a.letter <b.letter) {
                return true 
            }
            return false 
      }  
      return  a.count> b.count
   })
   
   for (let key of map.keys()){
       pq.enqueue({
         letter:key, 
         count: map.get(key)
       })
   }
   console.log(pq.array)

   let result=[]

   while(!pq.isEmpty()) {
       let temp = []
       for(let i=0; i<k; i++) {
            if (pq.isEmpty()) return ''
            let item = pq.dequeue()
            item.count--
            if (item.count>0) {
                temp.push(item)
            }
            result.push(item.letter)
       }
       for(let item of temp) {
          pq.enqueue(item)
       }
   }

   return result.join('')
}




class PriorityQueue {
  constructor(greaterThan) {
    this.greaterThan = greaterThan;
    this.array = [];
  }

  enqueue(item) {
    if (this.array.length === 0) {
      this.array.push(item);
      return;
    }
    let i
    for (i = this.array.length-1; i >= 0; i--) {
      if (this.greaterThan(item, this.array[i])) {
        this.array[i + 1] = this.array[i];
      } else {
         break
      }
    }
    this.array[i+1] = item;
  }
  

  dequeue() {
    return this.array.shift();
  }

  isEmpty() {
     return this.array.length === 0 
  }
}


console.log(rearrangeString('aaadbbcc', 2))