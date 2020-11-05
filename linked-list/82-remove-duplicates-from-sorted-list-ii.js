function deleteDuplicates(head) {
    if (head === null)  return head 
    
    let dummy = new ListNode(-1)
    dummy.next = head 
    
    let cur = head
    let prev = dummy
   
    while(cur!==null&& cur.next!==null) {
         if (cur.val!==cur.next.val) {
              prev=cur
              cur=cur.next 
              continue
         }
         let value = cur.val
         while(cur!==null && cur.val===value) {
             cur=cur.next
         }
         if (cur === null) {
             prev.next = null 
             break;
         }
         prev.next = cur //delete 
    }
    
    return dummy.next 
}