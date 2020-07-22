class Node {
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}

class LinkedList{
    constructor(){
        this.head = null,
        this.tail = null,
        this.size = 0
    }
    insertFirst(data){
        this.head = new Node(data, this.head)
    }
    insertLast(data){
        let node = new Node(data);
        let current;
        if(!this.head){
            this.head = node;
        }else{
            current = this.head;
            while(current.next){
            current = current.next
            }
            current.next = node;
        }
    }
}
const linkedlist = new LinkedList();

linkedlist.insertFirst(100)
linkedlist.insertFirst(200)
console.log(linkedlist.head);
