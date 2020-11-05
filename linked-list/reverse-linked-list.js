/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function reverseList(head) {
    if (head === null)   return head 
   
    let prev = null 
    let cur = head 
    while(cur!==null) {
        let next = cur.next
        cur.next = prev
        prev = cur 
        cur = next 
    }
   
    return prev 
}