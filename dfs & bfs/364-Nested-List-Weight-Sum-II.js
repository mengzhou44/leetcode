// Given a nested list of integers, return the sum of all integers in the list weighted by their depth.

// Each element is either an integer, or a list -- whose elements may also be integers or other lists.

// Different from the previous question where weight is increasing from root to leaf, now the weight is defined from bottom up. i.e., the leaf level integers have weight 1, and the root level integers have the largest weight.

// Example 1: Given the list [[1,1],2,[1,1]], return 8. (four 1's at depth 1, one 2 at depth 2)

// Example 2: Given the list [1,[4,[6]]], return 17. (one 1 at depth 3, one 4 at depth 2, and one 6 at depth 1; 1*3 + 4*2 + 6*1 = 17)


function  depthSum(nestedList) {
     if (nestedList === null || nestedList.length === 0)  return 0 
  
   
     let depth = findDepth(nestedList)
     let sum = 0 

     dfs(nestedList,depth)

     return sum 
     
     function findDepth(nestedList) {
        if (Array.isArray(nestedList) === false) return 1
        let depth =1 
        nestedList= nestedList.filter(item=> Array.isArray(item))
        for(let item of nestedList) {
             depth = Math.max(depth, 1+findDepth(item))
        }
        return depth 
    }

    function dfs(nestedList, depth) {
        if (!Array.isArray(nestedList)) {
            sum+= nestedList * depth
            return 
        }

        for(let item of nestedList){
            if (!Array.isArray(item)){
                sum+= item*depth
            } else {
                dfs(item, depth-1)
            }
        }
    }
}



console.log(depthSum([[1,1],2,[1,1]]))

