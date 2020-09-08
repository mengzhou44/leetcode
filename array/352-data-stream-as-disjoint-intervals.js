class SummaryRanges {
     
  constructor() {
      this.intervals = [] 
  }
  
  addNum(val) {
      if  (this.intervals.length === 0) {
           this.intervals.push([val,val])
      } else {
          this.intervals.sort((a,b)=> a-b)
          for(let i=0; i<this.intervals.length; i++) {
               if (this.intervals[i][0]<=val && 
                   this.intervals[i][1]>=val) {
                   return 
               }
               else if (this.intervals[i][0]-1 === val) {
                   this.intervals[i][0]=val
                   if (i>0 && this.intervals[i-1][1] === val) {
                       this.intervals[i-1][1] = this.intervals[i][1]
                       this.intervals = this.intervals.filter((item, index)=> index!==i)
                       
                   }
                   return 
               }
               else if (this.intervals[i][1]+1 === val) {
                   this.intervals[i][1]=val
                    if (i<this.intervals.length-1 && this.intervals[i][1] === this.intervals[i+1][0]) {
                         this.intervals[i+1][0] = this.intervals[i][0]
                       this.intervals = this.intervals.filter((item, index)=>  index!==i)

                    }
                   return 
               }
          }
          this.intervals.push([val,val])
      }
  }
  
   
  getIntervals() {
      return this.intervals
  }
}


