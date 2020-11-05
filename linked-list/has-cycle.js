function hasCycle(head) {
    if (head === null)  return false 
    
    let slow = head 
    let fast = head 
    
    while(fast && fast.next) {
         fast = fast.next.next
         slow =slow.next
         if (fast === slow)  {
              return true 
         } 
    }
    
    return false 
}