// instantiate an empty board with 3 rows (nested arrays) and 3 columns (empty strings)
let board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];

// function printBoard that displays a formatted version of a 3x3 empty board
const printBoard = (aBoard) => {
  console.log('Current Board:');
  console.log(aBoard[0].join(' | '));
  console.log(aBoard[1].join(' | '));
  console.log(aBoard[2].join(' | '));
}; // end printBoard function

// view empty board
console.log('Test view of empty board:');

// view empty formatted board
printBoard(board);

// add some values to the board cells
board[0][1] = '1';
board[1][0] = 'B';

// view formatted board with new values and compare to empty board
console.log('Test view of board with values:');
printBoard(board);
