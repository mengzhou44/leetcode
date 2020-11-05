/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
function reverseBetween(head, m, n) {
    if (head === null || head.next === null)  return head 
   
    let  p = head 
    let  leftTail = null
    let  index= 1
    
    while(index<m) {
        leftTail= p
        p=p.next
        index++
    }
    
    while(index<n) {
        p=p.next
        index++
    }
   
    let rightHead = p.next 
    p.next = null
     
    if (leftTail=== null) {
       
        let listTail = head 
        head = reverseList(head)
        listTail.next = rightHead
    } else {
        let listTail = leftTail.next    
        let list = leftTail.next 

        list = reverseList(list)
        leftTail.next = list 
        listTail.next = rightHead
    }
   
    
   
    return head 
   
}

function reverseList(head) {
   
   if (head === null || head.next === null)  return head 
   
   let prev = null 
   let cur = head 
   while(cur !==null) {
       let next = cur.next 
       cur.next =prev 
       prev = cur
       cur = next 
   }
 
   return prev 
}