class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
        this.count = 1;
    }
}

class Queue{
    constructor(){
        this.elements = []
    }
    enqueue(data){
        this.elements.push(data);
    }
    dequeue(){
      return  this.elements.shift();
    }
    isEmpty(){
        return this.elements.length == 0;
    }
    peek(){
        return !this.isEmpty() ? this.elements[0] : undefined
    }
    length(){
        return this.elements.length;
    }
}

function example(num){
    let q = new Queue();
    let q2 = new Queue();
    let node = new Node();
    for(let i = 0; i < num; i++){
        q.enqueue(new Node(i));
       // console.log(q.elements, "enqueue");
        //console.log(q.elements, "dequeue")
    }
    for(let i = 0; i < num; i++){

        q2.enqueue(new Node(i));
        //console.log(q2.elements, "q2")
    }
    for(let i = 0; i < num; i++){
        q.dequeue();
       
        console.log(q2.elements, "q2")
    }
    

}
example(7);