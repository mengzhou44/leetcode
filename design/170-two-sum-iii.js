class TwoSum {

     constructor() {
         this.array=[]
     }

     add(val) {
         this.array.push(val)
    }

    find(target) {
        let set = new Set()
        for(let num of this.array) {
            if (set.has(num)) return true 
            set.add(target-num)
        }
        return false 
    }

}

let twoSum = new TwoSum()
twoSum.add(1)
twoSum.add(3)
twoSum.add(5)
console.log(twoSum.find(4))
console.log(twoSum.find(7))
