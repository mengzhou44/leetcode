// Given a non-negative integer represented as non-empty a singly linked list of digits, 
//  plus one to the integer.

// You may assume the integer do not contain any leading zero, except the number 0 itself.

// The digits are stored such that the most significant digit is at the head of the list.

class ListNode {
     constructor(val) {
          this.val = val 
          this.next = null 
     }
}

function plusOne(head) {
     
    let  node  = reverseList(head)
    let prev = null  
    let cur = node
    let carry = 0 
    cur.val = cur.val +1 
    while(cur!==null) {
         cur.val +=carry
         if (cur.val>9) {
              cur.val = 0 
              carry =1 
         } else {
              carry = 0 
         }
         prev=cur
         cur=cur.next 
    }

    if (carry ===1 ) {
        prev.next = new ListNode(1)
    }
    console.log('node', node)
    return reverseList(node)
}


function reverseList(head) {
     if (head === null )  return  head 

     let prev = null 
     let cur = head 
     while(cur!==null) {
          let next = cur.next 
          cur.next = prev 
          prev = cur 
          cur = next
     }
     return prev 
}


// let head = new ListNode(1)
// head.next = new ListNode(2)
// head.next.next = new ListNode(9)



// console.log(plusOne(head))


let head2 = new ListNode(9)
console.log(plusOne(head2))