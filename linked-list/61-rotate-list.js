function  rotateRight(head, k) {

    if (k === 0 || head === null|| head.next === null ) return head 
    
    let len = 1 
    let cur = head 
    while(cur.next!==null) {
        len++
        cur=cur.next 
    }
     
    k = k % len
    if (k === 0 ) return head 
   
    let tail = cur
    
    cur = head 
    let count = 1 
    while(count< len-k) {
        cur=cur.next 
        count++
    }
    
    let rightHead = cur.next 
    cur.next = null 
    tail.next = head 
    
    return rightHead
} 