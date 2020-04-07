class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.mid = null;
    this.even = false;
  }
  addNode(data) {
    if ((this.head === null)) {
      this.head = this.tail = this.mid = new Node(data, this.head);
    } else {
      this.tail.next = new Node(data, null);
      this.tail = this.tail.next;
      this.updateMid();
    }
  }
  updateMid() {
    if (this.even) {
      this.mid = this.mid.next;
      this.even = !this.even;
    } else {
      this.even = !this.even;
    }
  }
  getMidPoint() {
    return this.mid;
  }
}

let linkedlist = new LinkedList();
linkedlist.addNode(200);
linkedlist.addNode(300);
linkedlist.addNode(400);
linkedlist.addNode(500);
linkedlist.addNode(600);
console.log(linkedlist.head.next.next);
//console.log(linkedlist.getMidPoint());
//console.log(linkedlist);
