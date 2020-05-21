function numIslands(grid) {
    const height = grid.length;
    //Height of grid/ count of arrays
    const width = grid[0].length;
    //length of array in first index
    let count = 0;
    
    for (let r = 0; r < height; r++) {
      for (let c = 0; c < width; c++) {
      //    console.log(grid[r][c], r, "r", c, "c")
        console.log(grid[r][c], "gird spot", r, c);
        if (grid[r][c] === 0) {
            console.log("running through first if, no count")
            continue;
        }
        count++;
        console.log("running through function dfs")
        depthFirstSearch(r, c);

      }
    }
   // console.log(count);
    return count;
    
    function depthFirstSearch(r, c) {
      if (r < 0 || c < 0 || r === height || c === width) return;
      if (grid[r][c] === 0) return;
      //setting present point to zero
      grid[r][c] = 0;
        //Checking area around present point
        //using recursion to set surrounding points to zero
      depthFirstSearch(r-1, c);
      depthFirstSearch(r+1, c);
      depthFirstSearch(r, c-1);
      depthFirstSearch(r, c+1);
    }
  }
  const islands = [
      [1,1,0,1,1],
      [0,0,0,1,1],
      [1,1,0,1,1],
      [0,0,0,1,1]
  ]
numIslands(islands);