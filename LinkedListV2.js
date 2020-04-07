class Node {
    constructor(data, next = null){
        this.data = data,
        this.next = next
    }
}
class LinkList {
    constructor(){
        this.head = null;
        this.size = 0;
    }
    addToLinkList(data){
        this.head = new Node(data, this.head);
        this.size++
    }
    addToEnd(data){
        let node = new Node(data);
        let current;
        if(!this.head){
            this.addToLinkList(data)
        }else{
            current = this.head
            while(current.next){
                current = current.next 
            }
            current.next = node;
        }
        this.size++
    }
}
const linklistnodes = new LinkList()
linklistnodes.addToLinkList({name:"anthony", last:"johnson"});
linklistnodes.addToLinkList(200);
console.log(linklistnodes);