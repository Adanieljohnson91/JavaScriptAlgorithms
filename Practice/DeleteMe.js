class Node{
    constructor(data, next = null){
        this.data= data,
        this.next = next
    };
}
// function Node2(data, next = null){
//     return {
//         data,
//         next
//     }
// }
let example = new Node(300, new Node(400));
console.log(example, "example");
class LinkedList{
    constructor(){
        this.head = undefined,
        this.size = 0;
 }
     addNode(data){
        this.head = new Node(data, this.head);
        this.size++;
    }
    addLast(data){
        if(this.head === undefined){
            this.head = new Node(data, this.head);
            this.size++;
            return;
        }
     let current = this.head;
     while(current.next){
         current = current.next;
     }
     current.next = new Node(data);
     this.size++;
    }

}
let newLink = new LinkedList();
newLink.addNode(300)
newLink.addLast(500)
newLink.addNode(400)
newLink.addLast(600)
console.log(newLink)
console.log(newLink.head.next, "LINKED LIST END")
// [Data1|| Pointer-->[Data||Pointer-->[Data|| Pointer or NULL]]]