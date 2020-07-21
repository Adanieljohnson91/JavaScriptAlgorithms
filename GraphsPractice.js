class Queue {
    constructor() {
        this.elements = []
    }
    enqueue(data) {
        this.elements.push(data);
    }
    dequeue() {
        return this.elements.shift();
    }
    isEmpty() {
        return this.elements.length == 0;
    }
    peek() {
        return !this.isEmpty() ? this.elements[0] : undefined
    }
    length() {
        return this.elements.length;
    }
}





class Graph {
    constructor(noOfVertices) {
        this.noOfVertices = noOfVertices;
        this.AdjList = new Map();
    }
    addVertex(v) {
        this.AdjList.set(v, []);
        // A => []

    }
    addEdge(v, w) {
        this.AdjList.get(v).push(w);
        this.AdjList.get(w).push(v);
        //  A => [B]
        //B => [A]
    }
    // printGraph() 
    printGraph() {
        var get_keys = this.AdjList.keys();

        for (var vertex of get_keys) {
            var get_values = this.AdjList.get(vertex);
            var conc = "";
            for (var adjacent of get_values)
                conc += adjacent + " ";
            console.log(vertex + " -> " + conc);
        }
    }
    bfs(startingNode) {
        var visited = [];
        for (var i = 0; i < this.noOfVertices; i++)
            visited[i] = false;
        var q = new Queue();
        visited[startingNode] = true;
        q.enqueue(startingNode);
        while (!q.isEmpty()) {
            var getQueueElement = q.dequeue();
            console.log(getQueueElement);
            var get_List = this.AdjList.get(getQueueElement);
            for (var i in get_List) {
                var neigh = get_List[i];

                if (!visited[neigh]) {
                    visited[neigh] = true;
                    q.enqueue(neigh);
                }
            }
        }
    }
    dfs(startingNode) {

        var visited = [];
        for (var i = 0; i < this.noOfVertices; i++)
            visited[i] = false;

        this.DFSUtil(startingNode, visited);
    }
    DFSUtil(vert, visited) {
        visited[vert] = true;
        console.log(vert);

        var get_neighbours = this.AdjList.get(vert);

        for (var i in get_neighbours) {
            var get_elem = get_neighbours[i];
            if (!visited[get_elem])
                this.DFSUtil(get_elem, visited);
        }
    }
}
var g = new Graph(6);
var vertices = ['A', 'B', 'C', 'D', 'E', 'F'];

for (var i = 0; i < vertices.length; i++) {
    g.addVertex(vertices[i]);
}
g.addEdge('A', 'B');
g.addEdge('A', 'D');
g.addEdge('A', 'E');
g.addEdge('B', 'C');
g.addEdge('D', 'E');
g.addEdge('E', 'F');
g.addEdge('E', 'C');
g.addEdge('C', 'F');
//console.log(g.AdjList, "Adj List")
//g.printGraph(); 
// console.log("BFS"); 
// g.bfs('A'); 
// console.log("DFS"); 
g.dfs('A');