function detectCycle(head) {
      
    if (head === null)  return null 
    
    let slow = head 
    let fast = head
    let result = head
    while(fast && fast.next) {
        slow= slow.next 
        fast = fast.next.next 
        if (slow === fast) {
            while(slow!==result) {
                slow= slow.next 
                result = result.next 
            }
            return result 
        }
    }
    
    return null 
}