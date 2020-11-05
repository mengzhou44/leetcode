/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
function  removeNthFromEnd(head, n) {
    if (head === null)  return  null
    if (head.next === null && n === 1)  return null 
    let prev = head 
    let fast = head 
    let slow = head 
    
    let index=1
    while(index<n) {
         fast = fast.next 
         index++
    }
  
    if (fast.next === null) return head.next 
   
    while(fast.next!==null) {
         prev = slow
         slow= slow.next 
         fast = fast.next 
    }
   
    prev.next =slow.next
    return head 
}