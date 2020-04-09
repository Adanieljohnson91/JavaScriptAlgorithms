//Creating a Link List
//A link list is a sinquential list of elements
//each elemet is called a node and each node holds information one is the data value the second is a pointer to the next node
function ListNode(val){
    this.val = val;
    this.next = null
}
const addTwoNumbers = function(l1,l2){
    let head = new ListNode(0)
    let node = head
    let carry = 0;

    while(l1|| l2){
        let l1Value = l1 ? l1.val : 0;
        let l2Value = l2 ? l1.val : 0;

        let sum = l1Value + l2Value + carry
        carry = 0
        let newValue = sum
        if(sum > 9){
            nuwValue = sum % 10
            carry = 1
        }
        
        node.next = new ListNode(newValue)
        node = node.next

        if(l1){
            l1 = l1.next
        }
        if(l2){
            l2 =l2.next
        }
    }
    if(carry){
        node.next = new ListNode(carry)
    }
    return head.next
}