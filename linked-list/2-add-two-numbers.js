/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function addTwoNumbers(l1, l2) {
    if (l1=== null)   return l2 
   
    if (l2 === null)   return l1 
   
    let  dummy = new ListNode(-1)
    let prev = dummy
    let carry= 0 
    
    while(l1!==null || l2!==null) {
        let sum=carry
        if (l1!==null) {
             sum+=l1.val
             l1= l1.next 
        } 
        if (l2!==null) {
             sum+=l2.val
             l2= l2.next 
        } 
        if (sum<10) {
             carry = 0 
        } else {
             carry = 1 
             sum = sum %10 
        }
        
        let node  = new ListNode(sum)
        prev.next = node 
        prev = node
    }
    
    if (carry=== 1) {
        prev.next = new ListNode(1)
    }
    
    return dummy.next
}
