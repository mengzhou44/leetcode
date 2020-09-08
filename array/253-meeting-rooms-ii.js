//Given an array of meeting time intervals consisting of start and end times 
//[[s1,e1],[s2,e2],...] (si < ei), find the minimum number of conference ...


function minMeetingRooms(intervals) {
    intervals = intervals.sort((a,b)=> a[0]-b[0])

    let priorityQueue = [intervals[0][1]] 

     for(let i=1; i< intervals.length; i++) {
          addInterval(intervals[i])
     }
     return priorityQueue.length 

    function addInterval([start,end]) {
       
             let updated = false 
             for(let i=0; i<priorityQueue.length; i++) {
                  if (priorityQueue[i]<start) {
                      priorityQueue[i]= end
                      updated = true 
                       break
                  }
             }
             if (updated=== false ) {
                console.log("start, end", start, end)
                priorityQueue.push(end)
             }            
             priorityQueue.sort((a,b)=>a-b)
         
    }

}

console.log(minMeetingRooms([[1,4], [2,8],[3,4], [5,7], [5,9]]))