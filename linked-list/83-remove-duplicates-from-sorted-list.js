function deleteDuplicates(head) {
    if (head === null || head.next === null)  return head 
     
    let cur = head 
    let temp = head.next 
    
    while(temp!== null) {
        while(temp!== null && temp.val === cur.val) {
             temp = temp.next
        } 
        if (temp === null) {
            cur.next = null
            break
        }
        cur.next = temp 
        cur = temp
        temp = cur.next
    }
    
    return head
}