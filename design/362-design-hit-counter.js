class  HitCounter {
     constructor() {
        this.queue=[]
     }

     hit(timeStamp) {
          this.queue.push(timeStamp)
     }

     getHits(now) {
        if (this.queue.length === 0)  return 0 
        let timeStamp = this.queue[0]
        while(now- timeStamp >=300 ){
              this.queue.shift()
              if (this.queue.length === 0)  return 0 
              timeStamp = this.queue[0]
        }
        return this.queue.length
     }

}

let counter = new HitCounter()
counter.hit(1)
counter.hit(2)
counter.hit(3)
console.log(counter.getHits(4))

counter.hit(300)
console.log(counter.getHits(300))
console.log(counter.getHits(301))
