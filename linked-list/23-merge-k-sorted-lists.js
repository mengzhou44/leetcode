/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
function mergeKLists(lists) {
     if (lists.length ===  0 )  return null 
     if (lists.length ===  1)  return  lists[0]
    
    while(lists.length>1) {
         let left=0
         let right= lists.length-1 
         let result=[]
         while(left<=right) {
             if (left===right) {
                 result.push(lists[left])
             }else {
                  let merged= merge(lists[left], lists[right])
                   result.push(merged)
             }
             left++
             right--
         }
        
         lists= result
    }
    
    return lists[0]
    
}
    

function merge(node1, node2) {
     if (node1=== null)   return node2 
     if (node2=== null)   return node1
    
     let dummy = new ListNode(-1)
     let cur = dummy 
     while(node1!==null || node2!==null) {
    
           if (node1!==null && node2!==null) {
                if (node1.val<node2.val) {
                    cur.next= node1
                    cur=node1
                    node1=node1.next
                } else {
                    cur.next= node2
                    cur=node2
                    node2=node2.next
                }
           }
           else if (node1!==null) {
                  cur.next= node1
                  break    
           } else {
                 cur.next= node2
                 break
           }
           
     }
    
     return dummy.next
    
}