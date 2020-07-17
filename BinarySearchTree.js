class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
        this.count = 1;
    }
}
class BinarySearchTree {
    constructor() {
        // root of a binary seach tree 
        this.root = null;
    }
    insert(data) {
        let node = new Node(data);
        if (this.root === null) {
            this.root = node;
        } else {
            this.insertNode(this.root, node)
        }
    }

    insertNode(current, node) {
        if (current.data === node.data) {
            current.count++;
            return;
        }
        if (node.data < current.data) {
            if (current.left === null) {
                current.left = node
            } else {
                this.insertNode(current.left, node)
            }
        }
        if (node.data > current.data) {
            if (current.right === null) {
                current.right = node;
            } else {
                this.insertNode(current.right, node)
            }
        }
        // What happens with data points that are equal.
    }
    // remove(data) 
    remove(data) {
        // root is re-initialized with 
        // root of a modified tree. 
        this.root = this.removeNode(this.root, data);
    }

    removeNode(node, data) {
        if (node === null) {
            return null
        } else if (data < node.data) {
            node.left = this.removeNode(node.left, data);
            return node;
        } else if (data > node.data) {
            node.right = this.removeNode(node.right, data);
            return node;
        } else {
            if (node.left === null && node.right === null) {
                node = null;
                return node;
            }
            if (node.left === null) {
                node = node.right;
                return node;
            }
            else if (node.right === null) {
                node = node.left;
                return node;
            }
        }

    }
    // Helper function 
    // findMinNode() 
    // getRootNode() 
    getRootNode() {
      console.log(this.root);
    }
    // inorder(node) 
    inorder(node) {
        if (node !== null) {
            this.inorder(node.left);
            console.log(node.data);
            this.inorder(node.right);
        }
    }
    // preorder(node)                
    // postorder(node) 
    // search(node, data) 
}

let bst = new BinarySearchTree();

bst.insert(6)
bst.insert(5)
bst.insert(4)
bst.insert(1)
bst.insert(2)
bst.insert(3)
bst.insert(7)
bst.insert(8)
bst.inorder(bst.root);
bst.getRootNode();