/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
function  cloneGraph(node) {
    if (node === null)   return null 
   
     let map = new Map()
     let newNode = new Node(node.val)
     map.set(node, newNode)
     let array=[node]
     
     while(array.length>0) {
         let cur = array.shift()
          for(let nei of cur.neighbors) {
              if (!map.has(nei)) {
                  map.set(nei, new Node(nei.val, []))
                  array.push(nei)
              }
              map.get(cur).neighbors.push(map.get(nei))
          }
     }
     
   return newNode
   
}