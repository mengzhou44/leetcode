/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
function reorderList(head) {
    if (head === null || head.next === null) {
         return head 
    }
    
    let array=[] 
    let cur = head 
    while(cur!==null) {
        array.push(cur)
        cur=cur.next
    }
    
    let dummy= new ListNode(-1)
    cur= dummy
    while(array.length>0) {
        let node = array.shift()
        cur.next= node
        cur=node
        if (array.length>0) {
            node = array.pop()
            cur.next= node
            cur=node
        }
    }
    cur.next= null 
    
    return dummy.next
}

************* solution 2 ***************

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
function reorderList(head) {
    if (head === null || head.next === null) {
         return 
    }
    
    let mid = findMid(head)
    let rightList= mid.next 
    mid.next=null 
  
    return  mergeLists(head,reverseList(rightList))
}

function findMid(head){
    let slow=head 
    let fast =head 
    
    while(fast&&fast.next) {
        fast = fast.next.next 
        slow=slow.next 
    }
    
    return slow
}

function  mergeLists(head1,head2) {
    let dummy = new ListNode(-1)
    let cur = dummy
    while(head1!==null || head2!==null) {
         if (head1!==null) {
             cur.next = head1
             head1= head1.next 
             cur=cur.next
         }
         if (head2!==null) {
             cur.next = head2 
             cur=cur.next
             head2= head2.next;
         }
    }
    return dummy.next 
} 



function reverseList(head) {
     if (head === null) return head 
    
     let cur= head 
     let prev = null 
     while(cur!==null) {
          let next = cur.next 
          cur.next = prev 
          prev=cur 
          cur=next 
         
     }
     return prev 
}