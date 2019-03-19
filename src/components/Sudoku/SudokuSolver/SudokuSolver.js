export const solve = function(board, c) { // 'board' is a 2D array (a sudoku board) and 'c' is the cell [0,81) at which we start solving
  let box, good, guesses, prod_sol, val, x, y;
  if(c===null) c=0;
  val=(c===81)?board:((board[x=c/9|0][y=c%9]!==0)?solve(board,c+1):undefined); // Base case, where we're at a filled cell or all 81 cells filled
  if(val) return val;
   box = function(j) {
    return sudoku[x-(x%3)+(j-(j%3))/3][y-(y%3)+(j%3)];      // jth cell in sub 3x3 box containing x,y
  };
  good = function(g) {
    return [0, 1, 2, 3, 4, 5, 6, 7, 8].every(function(i) {
      return g !== board[x][i] && g !== board[i][y] && g !== box(i); // returns true if and only if board[x][y] when set to g breaks sudoku rules due to collision
    });
  };
  guesses = [1, 2, 3, 4, 5, 6, 7, 8, 9].filter(good); // choose non-conflicting guesses for position (x, y)
  prod_sol = function(g) {  // returns true if and only if a guess actually produces a solution at (x, y)
    board[x][y] = g;
    return solve(board, c+1);
  };
  if ((guesses.some(prod_sol)) || (board[x][y] = 0)) return board; // return the solved board if a solution can be produced!
};

let sudoku =  [[1,0,3,0,0,0,0,8,4],
           [0,0,6,0,4,8,0,0,0],
           [0,4,0,0,0,0,0,0,0],
           [2,0,0,0,9,6,1,0,0],
           [0,9,0,8,0,1,0,4,0],
           [0,0,4,3,2,0,0,0,8],
           [0,0,0,0,0,0,0,7,0],
           [0,0,0,1,5,0,4,0,0],
           [0,6,0,0,0,0,2,0,3]]

 
 












// /* Searches the grid to find an entry that is still unassigned. If 
//    found, the reference parameters row, col will be set the location 
//    that is unassigned, and true is returned. If no unassigned entries 
//    remain, false is returned. */
//    const N = 9;
//    const UNASSIGNED = 0

//    const  FindUnassignedLocation = ( grid, row, col) =>
//    { 
//        for (row = 0; row < N; row++) 
//            for (col = 0; col < N; col++) 
//                if (grid[row][col] === UNASSIGNED) 
//                    return true; 
//        return false; 
//    } 
     
//    /* Returns a boolean which indicates whether an assigned entry 
//       in the specified row matches the given number. */
//    const UsedInRow = (grid, row, num) => 
//    { 
//        for (let col = 0; col < N; col++) 
//            if (grid[row][col] === num) 
//                return true; 
//        return false; 
//    } 
     
//    /* Returns a boolean which indicates whether an assigned entry 
//       in the specified column matches the given number. */
//    const UsedInCol = (grid,col,num) => 
//    { 
//        for (let row = 0; row < N; row++) 
//            if (grid[row][col] === num) 
//                return true; 
//        return false; 
//    } 
     
//    /* Returns a boolean which indicates whether an assigned entry 
//       within the specified 3x3 box matches the given number. */
//    const UsedInBox = ( grid, boxStartRow, boxStartCol, num) =>
//    { 
//        for (let row = 0; row < 3; row++) 
//            for (let col = 0; col < 3; col++) 
//                if (grid[row+boxStartRow][col+boxStartCol] === num) 
//                    return true; 
//        return false; 
//    } 
     
//    /* Returns a boolean which indicates whether it will be legal to assign 
//       num to the given row,col location. */
//    const isSafe = (grid,  row,  col, num) =>
//    { 
//        /* Check if 'num' is not already placed in current row, 
//           current column and current 3x3 box */
//        return !UsedInRow(grid, row, num) && 
//               !UsedInCol(grid, col, num) && 
//               !UsedInBox(grid, row - row%3 , col - col%3, num)&& 
//                grid[row][col] === UNASSIGNED; 
//    } 

//    const SolveSudoku = (grid) =>  
// { 
//     let row, col; 
  
//     // If there is no unassigned location, we are done 
//     if (!FindUnassignedLocation(grid, row, col)) 
//        return true; // success! 
  
//     // consider digits 1 to 9 
//     for (let num = 1; num <= 9; num++) 
//     { 
//         // if looks promising 
//         if (isSafe(grid, row, col, num)) 
//         { 
//             // make tentative assignment 
//             grid[row][col] = num; 
  
//             // return, if success, yay! 
//             if (SolveSudoku(grid)) 
//                 return true; 
  
//             // failure, unmake & try again 
//             grid[row][col] = UNASSIGNED; 
//         } 
//     } 
//     return false; // this triggers backtracking 
// } 