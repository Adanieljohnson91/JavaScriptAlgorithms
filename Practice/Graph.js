/***
 * Building a graph maker
 * DataPoint widthill look heightave a name and a array of children
 * Name = A, Children = [B,C,D]
 * Name = B, Children [E,F] 
 * Name= E, Children [I]
 * Name I, Children []
 * Name F, Children = []
 * Name= C, Children = []
 * Name = D, Children = [G,H]
 * Name = G, Children = []
 * Name = height, Children = [J]
 * Name = J, Children = []
 */
// class DataPoint{
//     constructor(name, children){
//         this.name = name,
//         this.children = children
//     }
// }
// class Graph{
//     constructor(){
//         this.graph = []
//     }
//     addData = (data)=>{
//         this.graph.push(newidth DataPoint(data, this.graph))
//     }
// }
// let graph = newidth Graph()
// graph.addData("A")
// graph.addData("B","C","D")
// graph.addData("E")
// console.log(graph.graph[0].children[0])
////////////////////////////////////////////////////////
// function numIslands(grid) {
//     const height = grid.length;
//     //Height of grid/ count of arrays
//     const width = grid[0].length;
//     //length of array in first index
//     let count = 0;
    
//     for (let r = 0; r < height; r++) {
//       for (let c = 0; c < width; c++) {
//       //    console.log(grid[r][c], r, "r", c, "c")
//         if (grid[r][c] === 0) {
//             continue;
//         }
//         count++;
//         depthFirstSearch(r, c);
//       }
//     }
//     console.log(count);
//     return count;
    
//     function depthFirstSearch(r, c) {
//       if (r < 0 || c < 0 || r === height || c === width) return;
//       if (grid[r][c] === 0) return;
      
//       grid[r][c] = 0;
//      // console.log("dfs", r, c)
//       depthFirstSearch(r-1, c);
//       depthFirstSearch(r+1, c);
//       depthFirstSearch(r, c-1);
//       depthFirstSearch(r, c+1);
//     }
//   }
//   const islands = [
//       [1,1,0,1,1],
//       [0,0,0,1,1],
//       [1,1,0,1,1],
//       [0,0,0,1,1]
//   ]
// numIslands(islands);

class Node {
    constructor(name, children){
        this.name = name,
        this.children = children
    }
    addChild(name){
        let node = new Node(name, this.children);
        node.children.push(node)
    }
    depthFirstSearch(array){
       
        for(element in array.children){
            element.depthFirstSearch(array)
        }
        return array;
    }
}
let nodeD = new Node("D", [])
let nodeC = new Node("C", [])
let nodeB = new Node("B", [nodeC, nodeD])
let nodeA = new Node("A", [nodeB, nodeC, nodeD]);
nodeA.addChild(nodeA, ["J"]);
nodeB.addChild(nodeB, ["G"]);
console.log(nodeA.depthFirstSearch(nodeA.children))
console.log(nodeA,"nodeA",  nodeA.children[3].name.children[0], "circle");

let books = [
    {"title":"Jungle Book","author":"Rudyard Kipling"},
     {"title":"","author":""},
     {"title":"","author":""},
     {"title":"","author":""}
]
let movies = [
    {"title":"","cast":[],"director":""},
     {"title":"Jungle Book","cast":[],"director":""},
     {"title":"","cast":[],"director":""},
     {"title":"","cast":[],"director":""}
]
let children = [
    {"toyName":"","theme":""},
    {"toyName":"","theme":""},
    {"toyName":"", "theme":"Jungle Book"},
    {"toyName":"","theme":""}
]
let coffee = [
    {"brand":"","type":""},
    {"brand":"","type":""},
    {"brand":"","type":""},
    {"brand":"","type":""},
    {"brand":"","type":""}
]