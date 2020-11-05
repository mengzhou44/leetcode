function partition(head, x) {
    let left = new ListNode(-1)
    let leftCur= left
    let right = new ListNode(-1)
    let rightCur = right
    
     let cur = head 
     while(cur!==null) {
         if (cur.val<x) {
            leftCur.next = cur
            leftCur = cur
         }else {
             rightCur.next = cur 
             rightCur = cur 
         }
         cur=cur.next 
     }
     rightCur.next = null 
    leftCur.next = right.next 
    return left.next 
}