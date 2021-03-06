

/*
Design Tic-Tac-Toe

Assume the following rules are for the tic-tac-toe game on an n x n 
board between two players:

A move is guaranteed to be valid and is placed on an empty block.
Once a winning condition is reached, no more moves are allowed.
A player who succeeds in placing n of their marks in a horizontal, 
vertical, or diagonal row wins the game.

Implement the TicTacToe class:

TicTacToe(int n) Initializes the object the size of the board n.
int move(int row, int col, int player) Indicates that player with id player 
plays at the cell (row, col) of the board. The move is guaranteed to be a valid move.
*/


class TicTacToe {
    
    constructor(n) {
        this.rows = new Array(n).fill(0); 
        this.cols = new Array(n).fill(0); 
        this.diagonal1 = 0; 
        this.diagonal2 = 0; 
        this.size = n; 
    }
    
    // Count the moves made at each col/ row 
    move(row, col, player) {
        let whichPlayer = player === 1 ? 1 : -1;
        
        this.rows[row] += whichPlayer;
        this.cols[col] += whichPlayer; 
        
        // forward slash diagonal : \
        if(row === col) {
            this.diagonal1 += whichPlayer;
        }   
        //  slash diagonal: / 
        if(col === this.size - row - 1) { 
            this.diagonal2 += whichPlayer;    
        }
                
        // player  won 
        if(Math.abs(this.rows[row]) === this.size || 
          Math.abs(this.cols[col]) === this.size ||
           Math.abs(this.diagonal1) === this.size ||
           Math.abs(this.diagonal2) === this.size) {
            return player
           }
        
        return 0; 
    }

}


/*
Find Winner on a Tic Tac Toe Game

Tic-tac-toe is played by two players A and B on a 3 x 3 grid.

Here are the rules of Tic-Tac-Toe:

Players take turns placing characters into empty squares (" ").
The first player A always places "X" characters, while the second player B always places "O" characters.
"X" and "O" characters are always placed into empty squares, never on filled ones.
The game ends when there are 3 of the same (non-empty) character filling any row, column, or diagonal.
The game also ends if all squares are non-empty.
No more moves can be played if the game is over.
Given an array moves where each element is another array of size 2 corresponding to the row and column of the grid where they mark their respective character in the order in which A and B play.

Return the winner of the game if it exists (A or B), in case the game ends in a draw return "Draw", if there are still movements to play return "Pending".

You can assume that moves is valid (It follows the rules of Tic-Tac-Toe), the grid is initially empty and A will play first.


Input: moves = [[0,0],[2,0],[1,1],[2,1],[2,2]]
Output: "A"

Even idx = player 1
odd idxs = player 2 

each move is [row, col]

within input, only 1 winner 

3 x 3 grid 

Strategy:
- Iterate thru even idxs 
 - hash : {row: # of occure}
 - hash : {col: # of occurences}
 - diagonal1, diagonal2 - define the positions of diagonals 
      - dig1 = set: [[0,0], [1,1], [2,2]]
      - dig1 = set: [[0,2], [1,1], [2,0]] 
 - IF row/ col # of occures is 3, player won 
 - If position is in dia1, dia2, increment diag1Counter, 
        OR diag2Counter
        - IF counter == 3, player won

Also iterate thru the odds 
*/


// doesnt pass tests but kinda good enough
var tictactoe = function(moves) {

    let hashRow = {}, 
        hashCol = {}, 
        dig1 = new Set([0,0], [1,1], [2,2]),
        dig2 = new Set([0,2], [1,1], [2,0]),
        dig1Count = 0, 
        dig2Count = 0, 
        aWon = false,
        bWon = false;
    
    // check if player A won
    for(let i = 0; i < moves.length; i += 2) {
        let move = moves[i],
            row = move[0], 
            col = move[1]; 
        
        // check for row or col win
        if(hashRow[row]) {
            hashRow[row]++; 
        } else {
            hashRow[row] = 1; 
        }
        
        if(hashCol[col]) {
            hashCol[col]++; 
        } else {
            hashCol[col] = 1; 
        }
        
        if(hashRow[row] === 3 || hashCol[col] === 3) {
            aWon = true;
            break;
        }
        
        // check for diagonal win 
        if(dig1.has(move)) {
            dig1Count++; 
        } else if(dig2.has(move)) {
            dig2Count++; 
        }
        
        if(dig1Count === 3 || dig2Count === 3) {
            aWon = true; 
            break;
        }
    }

    hashRow = {}; 
    hashCol = {}; 
    dig1Count = 0; 
    dig2Count = 0;
    
    // check if player B won 
    for(let i = 1; i < moves.length; i += 2) {
        let move = moves[i],
            row = move[0], 
            col = move[1]; 
        
        // check for row or col win
        if(hashRow[row]) {
            hashRow[row]++; 
        } else {
            hashRow[row] = 1; 
        }
        
        if(hashCol[col]) {
            hashCol[col]++; 
        } else {
            hashCol[col] = 1; 
        }
        
        if(hashRow[row] === 3 || hashCol[col] === 3) {
            bWon = true;
            break;
        }
        
        // check for diagonal win 
        if(dig1.has(move)) {
            dig1Count++; 
        } else if(dig2.has(move)) {
            dig2Count++; 
        }
        
        if(dig1Count === 3 || dig2Count === 3) {
            bWon = true; 
            break;
        }
    }
    
    // check if draw, winner, pending
    if(bWon && aWon) {
        return "Draw"
    } else if(bWon) {
        return "B"
    } else if(aWon) {
        return "A"
    } else {
        return "Pending"
    }
    
};




Find my friends 

1. Functional & nonfunctional requirements 

2.  High level design 
 - Components in system



 
3. Estimations of the systems
 - Traffic, storage [locations], bandwidth 

4. APIs / datebase schemas 


 
1. Functional & nonfunctional requirements  / goals 

Functional reqs:
- Have: user's location (latitude/ longitude) 
- List of friends & their locations, who've turned on location finding 
- Shows map of locations
- Trail of where they've been last 10 mins (user & friends trails)

Non-functional: 
- Low latency, real time data 
- Reliable / consistent 
- Manageable 
- Search heavy - read heavy / pushing people location is a write heavy. 1:1 read/ heavy ratio 
- Running on user device => power & performance is very imp, 
  - battery drain is important. mitigate (turning on GPS is draining)
  - lower processing bc of mobile device
  - offload to a local server? optimized so can run on device? 
- Privacy implications => encryption, along the entire system path. User's friends have
decryption keys 


System extensions:
- Directions, apple map directions system
- Map modes


2. High level design  
Drawing mode







const _ = require('lodash');

/*
Tic tac toe 

2 players: X and O 

3 x 3 grid  => matrix

Alternative moves 
- cols, rows, diagonals 

What do we need? 

- Build grid 
  - Grid : [ [], [], [] ]
- Each player builds move => [row, col] 
  - Did player win? based on previous moves 
  - Row, col, diagonal (2 diagonals)
  - If player won => done. No second round
- Tracks each player's previous moves 
  - Track X or O based on winning 

Status: - game in progress, player1 / player2 
won, game is tied 
*/


class TicTacToe {

  // grid of size 3 
  constructor() {
    this.grid = [[], [], []]; 
    // alt: rows/ cols
    this.size = 3; 
    
  }

  move(player, row, col) {
    let note; 
    if(player === 1) {
      note = "X" 
    } else {
      note = "O"
    }
    
  
    // [[X  ], 
    //  [   ], 
    //  [  O]]
    
    this.grid[row][col].push(note); 
    
    // determine current status
    for(let row = 0; row < this.grid.length; row++) {
      for(let col = 0; col < this.grid.length; col++) {
        // count history/ check winners 
        
      }
    }
  
      
    // if game in progress
      
    // If game is tied, track that  
  }
  
  
  
  

}
