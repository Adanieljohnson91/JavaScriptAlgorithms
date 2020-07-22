/*Linear Data Structure
Ordered Collection of Data
Not stored senquentially
First Node is the Head , Last is tail
Data and Next

*/
// const node1 = {
//     data:100
// }
// const node2 = {
//     data:200
// }
// node1.next = node2;
// console.log(node1);

class Node {
    // Node Class, in the constructor we are storing the data value and the next value
    constructor(data, next = null){
        this.data = data,
        this.next = next
    }
}
class LinkedList {
    // this is out linked list, here we are storing a head value and a size value
    constructor(){
        this.head = null;
        this.size = 0;
    }
    //insert first node
    insertFirst(data){
        // when inserting we are assigning our head a Node value wich will have the data passes along with its designated next value that is constructed with the Node class
        this.head = new Node(data, this.head);
        this.size++
    }
    //insert last node
    insertLast(data){
        let node = new Node(data);
        let current;
        // if empty, make head
        if(!this.head){
            this.head = node;
            } else{
                current = this.head;
                while(current.next){
                    current = current.next;
                    // Node.next holds the next data here we are setting the next data to the node.data, we are setting out head starting at the first next
                }
                // 
                current.next = node; 
        }
        this.size++
    }
    // Insert at index
    insertAtIndex(data, index){
        //if index is out of range 
        if(index < 0 && index > this.size){
            console.log("fail");
            return;
        }
        //if first index
        if(index === 0){
            this.insertFirst(data);
            return;
        }
        const node = new Node(data);
        let current, previous;

        //Set Current to first
        current = this.head;
        let count = 0

        while(count < index){
            previous = current; // Node before the index
            count++;
            current = current.next; //Node after index
        }

        node.next = current;
        previous.next = node;

        this.size++;
    }
    //Select from  index
    getAt(index){
        let current = this.head;
        let count = 0;

        while(current){
            if((count === index)){
                console.log(current.data);
            }
            count++;
            current = current.next;
        }

        return ;
    }
    // Remove at Index
    removeAt(index){
        if(index < 0 || index > this.size){
            return;
        }
        let current = this.head;
        let previous;
        let count = 0;

        if(index ===0 ){
            this.head = current.next
            return;
        }else {
            while(count < index){
                count++
                previous = current;
                current = current.next
            }
        previous.next = current.next 
        }
        this.size--
    }
    //Clear List
    clearList(){
        this.head = null;
        this.size = 0;
    }
    //Print List Data
    printListData(){
        let current = this.head;


        while(current){
            console.log(current.data)
            current = current.next;
        }
    }
}
const linklist = new LinkedList()
linklist.insertFirst(100);
linklist.insertFirst(200);
linklist.insertFirst(300);
linklist.insertFirst(400);
linklist.insertFirst(500);
linklist.insertFirst(600);
 linklist.insertLast(700);
linklist.removeAt(3);
linklist.printListData();
//linklist.getAt(2);