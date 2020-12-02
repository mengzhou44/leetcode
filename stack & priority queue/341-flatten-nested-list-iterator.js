/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */



/**
 * @constructor
 * @param {NestedInteger[]} nestedList
 */
class NestedIterator {
    constructor(list) {    
         this.array=[]
         this.currentIndex = 0
         this.dfs(list)
    }
    
     dfs(list) {
           
             for(let item of list) {
                  if (item.isInteger()) {
                       this.array.push(item.getInteger())
                  } else {
                      this.dfs(item.getList())
                  }
             }
     }
    
    hasNext() {
        return this.currentIndex< this.array.length
    }
    
    next() {
        return this.array[this.currentIndex++]
    }
}
