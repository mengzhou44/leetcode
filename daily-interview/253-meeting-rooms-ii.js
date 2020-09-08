//given an array of meeting time intervals consisting of start and end time, find minimum number of conference 
//rooms 

function findMinmumRooms(intervals) {
    intervals = intervals.sort((a,b)=> a[0]-b[0])
    let queue = new PriorityQueue((a,b)=> {
       if (a<b)  return true 
       return false 
    })

    queue.enqueue(intervals[0][1])
   
    for(let i=1; i<intervals.length; i++) {
        if (intervals[i][0] >queue.peek()) {
           queue.dequeue()
        }
        queue.enqueue(intervals[i][1])
    }
    return queue.size()
}


class  PriorityQueue {
     constructor(smallerThan) {
        this.array=[]
        this.smallerThan= smallerThan
     }
    
     enqueue(val) {
        if  (this.array.length === 0) {
            this.array.push(val)
        } else {
            let i
            for(i=this.array.length-1; i>=0;  i--) {
                if (this.smallerThan(val,this.array[i])) {
                    this.array[i+1] = this.array[i]
                } else {
                   break
                }
            }
            this.array[i] = val
        }
     }

     dequeue() {
        this.array.shift()
     }

     peek() {
        return this.array[0]
     }

     size() {
         return this.array.length 
     }
}


console.log(findMinmumRooms([[1,4], [2,8], [3,4], [5,7], [5,9]]))