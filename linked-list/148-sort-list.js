/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function  sortList(head) {
 
    if (head === null || head.next === null)  return head 
   
    let slow = head 
    let fast = head.next
    while(fast && fast.next) {
         fast = fast.next.next 
         slow = slow.next 
    }
   
   let mid = slow.next
   slow.next = null 

   return merge(sortList(head), sortList(mid))
}

function merge(head1, head2) {
   
   if (head1 === null)  return head2 
   if (head2 === null)  return head1
   
   let dummy = new ListNode(-1)
   let cur = dummy 
   while(head1!==null || head2!== null) {
        if (head1!==null && head2!==null) {
             if (head1.val<head2.val) {
                  cur.next = head1
                  cur=head1
                  head1=head1.next
             } else {
                  cur.next = head2
                  cur=head2
                  head2=head2.next
             }
        }
        else if (head1!==null) {
              cur.next = head1
              cur=head1
               head1=head1.next
        } else {
             cur.next = head2
             cur=head2
             head2=head2.next
        }
   }
   
   return dummy.next     
}
