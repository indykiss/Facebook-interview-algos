/*
Number of Islands

Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. 
An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. 
You may assume all four edges of the grid are all surrounded by water.

Input:
11110
11010
11000
00000

Output: 1

Strat: Treat the grid like it's an undirected graph and there's an edge between 
adjacent ones. So use depth first search to scan the map. 
If a node has a 1, then trigger a DFS. Every visited node during search should be
set at 0 to mark it as visted. Count the number of root nodes that trigger DFS. 
This number would be the number of islands, since each DFS trigger is an island. 
*/












// Attempt # 2: Did ok, but need to do again
    // Definitely had to look at the solution too much

var numIslands = function(grid) {
    if(!grid) {return 0}
    let islands = 0;
    
    const dfs = function(row, col) {
        const dirs = [[0,-1], [1,0], [0,1], [-1,0]];
        
        grid[row][col] = "0";
        
        dirs.forEach(dir => {
            let posX = row + dir[0]
            let posY = col + dir[1];
            
            // Check that we're on the board. Check if we find a 1. If we do, trigger another dfs to find the other 1s
            if(posX >= 0 && posY >= 0 &&
              posX < grid.length && posY < grid[0].length &&
               grid[posX][posY] === "1") {
                dfs(posX, posY);
            }
        })
    }
    
    for(let row = 0; row < grid.length; row++) {
        for(let col = 0; col < grid[row].length; col++) {
            if(grid[row][col] === "1") {
                dfs(row, col);
                islands += 1;
            }
        }
    }
    return islands;
};










var numIslands = function(grid) {
    
    // Edge: Valid input 
    if(!grid) { return false; }
    
    // Keep track of island count 
    let numIslands = 0;
    
    // Create DFS function:
    let dfs = function(row, col) {
        // Short for left, right, up, and down check 
        let dirs = [[0,-1], [1,0], [0,1], [-1,0]];
    
        // Find our current spot
        grid[row][col] = '0';
    
        // Loop over directions
        dirs.forEach(dir => {
            let posX = row + dir[0];
            let posY = col + dir[1];
        // check if we're on the board and if we find 1, then we do a DFS from there 
            if(posX >= 0 && 
               posX < grid.length &&
               posY >= 0 && 
               posY < grid[0].length && 
               grid[posX][posY] === '1') {
                dfs(posX,posY)
            }
        });
    }
    
    // Loop over the grid's rows and cols, need nested loop
    for(let row = 0; row < grid.length; row++) {
        for(let col = 0; col < grid[row].length; col++) {
            // Trigger DFS if we've found a 1 and increment island count
            if(grid[row][col] === '1') {
                numIslands+= 1;
                dfs(row, col);
            }
        }
    }
    
    // We've counted the islands, let's return em
    return numIslands;
};