// Given an array of meeting time intevls [[s1,e1], [s2,e2] ....]
// determine if a person could attent all meetings 


function canAttendMeetings(intervals) {
     intervals.sort((a,b)=> a[0] - b[0])
       for(let i=0; i<intervals.length-1; i++) {
         if (intervals[i][1]>intervals[i+1][0]) {
            return  false 
         }
     }
     return true 
}

console.log(canAttendMeetings([[7, 10],[2,4]]))
console.log(canAttendMeetings([[0, 30],[5,10], [15,20]]))