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
function  insertionSortList(head) {
    if (head === null || head.next === null)  return head 
    
    
    let prev= head 
    let cur=head.next 
    while(cur!==null) {
        if (cur.val<prev.val) {
            prev.next = cur.next
            head= insert(cur, head)
            cur=prev.next
        }else {
            prev=cur
            cur=cur.next 
        }
    }
    
    return head 
}

function insert(node, head) {

    if (node.val<head.val) {
         node.next = head 
         return  node
    }
    
    let prev = head
    let cur=head.next
    while(node.val>=cur.val) {
        prev=cur
        cur=cur.next
    }
    
    prev.next = node 
    node.next = cur
    
    return head 
}
