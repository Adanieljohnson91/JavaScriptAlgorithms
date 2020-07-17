class Node 
{ 
    constructor(data) 
    { 
        this.data = data; 
        this.left = null; 
        this.right = null; 
    } 
} 
class BinarySearchTree 
{ 
    constructor() 
    { 
        this.root = null; 
    } 
    insert(data) 
{ 
    var newNode = new Node(data); 
    if(this.root === null) 
        this.root = newNode; 
    else
        this.insertNode(this.root, newNode); 
} 
insertNode(node, newNode) 
{ 
    if(newNode.data < node.data) 
    { 
        if(node.left === null) 
            node.left = newNode; 
        else
            this.insertNode(node.left, newNode);  
    } 
    else
    { 
        if(node.right === null) 
            node.right = newNode; 
        else
            this.insertNode(node.right,newNode); 
    } 
} 
    // remove(data) 
    remove(data) 
    { 
        // root is re-initialized with 
        // root of a modified tree. 
        this.root = this.removeNode(this.root, data); 
    } 
      
    // Method to remove node with a  
    // given data 
    // it recur over the tree to find the 
    // data and removes it 
    removeNode(node, key) 
    { 
        //Key is data to remove, node is root->branches->nodes
        if(node === null) 
            return null; 
        else if(key < node.data) 
        { 
            node.left = this.removeNode(node.left, key); 
            return node; 
        } 
        else if(key > node.data) 
        { 
            node.right = this.removeNode(node.right, key); 
            return node; 
        } 
        else
        { 
             // deleting node with no children 
            if(node.left === null && node.right === null) 
            { 
                node = null; 
                return node; 
            } 
            if(node.left === null) 
            { 
                node = node.right; 
                return node; 
            } 
              
            else if(node.right === null) 
            { 
                node = node.left; 
                return node; 
            } 
      
            var aux = this.findMinNode(node.right); 
            node.data = aux.data; 
      
            node.right = this.removeNode(node.right, aux.data); 
            return node; 
        } 
      
    }         
  
    // Helper function 
    // findMinNode() 
    // getRootNode() 
    // inorder(node) 
    // preorder(node)                
    // postorder(node) 
    // search(node, data) 
} 