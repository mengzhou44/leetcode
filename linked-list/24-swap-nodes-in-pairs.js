function swapPairs(head) {
    if (head === null || head.next === null) return head
     let dummy = new ListNode(-1)
     dummy.next = head 
     let cur = dummy
     while(cur && cur.next && cur.next.next) {
          cur = swap(cur)
     }
     return dummy.next 
   
   function swap(cur) {
        let node1= cur 
        let node2 =cur.next 
        let node3= cur.next.next 
        let next = node3.next 
        node1.next = node3
        node3.next = node2 
        node2.next = next  
        return node2
   }
}