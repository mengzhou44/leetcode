/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
function getIntersectionNode(headA, headB) {
       
    let p1 = headA 
    let p2 = headB 
    
    while(p1!==p2) {
        if (p1=== null) {
             p1 = headB
        } else {
             p1 = p1.next
        }
        
        if (p2=== null) {
             p2 = headA
        } else {
             p2 = p2.next
        }
    }
   
    return p1 
   
}


function getIntersectionNode(headA, headB) {
       
    if (headA === null  || headB === null)   return null 
    
    let set  = new Set()
    
    let cur = headA
    
    while(cur!==null) {
         set.add(cur)
         cur= cur.next 
    }
    
    cur = headB
    while(cur!==null) {
         if (set.has(cur)) return cur 
         cur = cur.next
    }
    return null 

}