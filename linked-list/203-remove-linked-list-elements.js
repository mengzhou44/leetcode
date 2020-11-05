function removeElements(head, val) {
    if (head === null)  return head 
 
    let dummy = new ListNode(-1)
    dummy.next = head 
    let cur=head 
    let prev = dummy 
    while(cur!==null) {
        while(cur!==null && cur.val===val){   
             cur=cur.next
        }
      
        prev.next = cur
        prev = cur 
        if (cur === null) break
 
        cur = cur.next
    }
 
    return dummy.next 
 
}