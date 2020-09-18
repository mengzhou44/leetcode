// A strobogrammatic number is a number that looks the same when rotated 180 degrees (looked at upside down).

// Find all strobogrammatic numbers that are of length = n.

// For example,

// Given n = 2, return ["11","69","88","96"].

function findStrobogrammatic(n){
      if (n=== 0)  return [''] 
      if (n=== 1)   return ['0', '1', '8']
       
      let previous = findStrobogrammatic(n-2)
      let result =[]
      for(let item of previous) {
          result.push(`1${item}1`)
          result.push(`8${item}8`)
          result.push(`6${item}9`)
          result.push(`9${item}6`)
      }
      return result 
}

