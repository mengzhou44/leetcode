/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
function copyRandomList(head) {
    if (head === null)  return null 
    let map= new Map() 
   
    let dummy = new Node(-1)
    let cur = head
    dummy.next = new Node(cur.val)
    let copy = dummy.next 
    map.set(cur, copy)
    while(cur.next !== null) {
        cur = cur.next 
        copy.next = new Node(cur.val)
        copy= copy.next
        map.set(cur, copy)
    }
    
    cur = head 
    while(cur!== null) {
        let temp= cur.random
        let copy = map.get(cur)
        copy.random= map.get(temp)
        cur=cur.next 
    }
    
   return dummy.next
}