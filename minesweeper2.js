// function that will construct an array of customized dimensions
// all parameters must be positive integers
const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
/*in future version,
add error handling in case user enters 0 or negative number as parameter*/
  // instantiate an empty array board
  let board = [];
  // populate board with rows and columns with a nested loop
  for (i = 0; i < numberOfRows; i++){
    // create an empty 'row' array
    let thisRow = [];
    // add the desired number of 'columns' as empty strings
    for (j = 0; j < numberOfColumns; j++){
      thisRow.push(' ');
    }
    // push the populated row into board
    board.push(thisRow);
  }
  // return the populated board with empty rows and columns
  return board;
} // end generatePlayerBoard function

// test generatePlayerBoard function
console.log('generatePlayerBoard Test');
console.log("2x2 expected output: [ [ ' ', ' ' ], [ ' ', ' ' ] ]\tactual output:", generatePlayerBoard(2, 2));
console.log("3x1 expected output: [ [ ' ' ], [ ' ' ], [ ' ' ] ]\tactual output:", generatePlayerBoard(3, 1));
console.log("1x3 expected output: [ [ ' ', ' ', ' ' ] ]\tactual output:", generatePlayerBoard(1, 3));
console.log('--------------------------------------------------');
// end testing

// function printBoard that displays a formatted version of a 3x3 empty board
const printBoard = (aBoard) => {
  // create formattedBoard string where column row array in the board with a |
  // and each row is displayed on its own line
  let formattedBoard = aBoard.map(aRow => aRow.join('|')).join('\n');
  // print formattedBoard string on the console
  console.log(formattedBoard);
}; // end printBoard function


// test printBoard function
console.log('printBoard Test');
console.log('formatted 2x2:'); printBoard(generatePlayerBoard(2, 2));
console.log('formatted 3x1:'); printBoard(generatePlayerBoard(3, 1));
console.log('formatted 1x3:'); printBoard(generatePlayerBoard(1, 3));
console.log('--------------------------------------------------');
// end testing


// function that will construct an array with hidden bombs
// all parameters must be positive integers
const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {
  /*in future version,
  user can just choose level of difficulty and a separate function will determine
  number of bombs depending on the board size*/
  let board = [];
  // populate board with rows and columns with a nested loop
  for (i = 0; i < numberOfRows; i++){
    // create an empty 'row' array
    let thisRow = [];
    // add the desired number of 'columns' as null
    for (j = 0; j < numberOfColumns; j++){
      thisRow.push(null);
    }
    // push the populated row into board
    board.push(thisRow);
  }
  // instantiate a counter for bombs placed
  let bombsPlaced = 0;
  // add bombs until the bomb counter matches desired number of bombs
  while (bombsPlaced <= numberOfBombs){
    // randomly select a row and column
    let randomRowIndex = Math.floor(Math.random() * numberOfRows);
    let randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
    /*in future version, add control statement to ensure there is no more than
    one bomb in one spot*/
    // put a bomb in the randomly selected board spot
    board[randomRowIndex][randomColumnIndex] = 'B';
    // increase the bomb counter by one
    bombsPlaced += 1;
  }
  // return the populated board with randomly allocated bombs
  return board;
} // end generateBombBoard function

// test generatePlayerBoard function
console.log('generateBombBoard Test');
console.log('2x2 with 1 bomb - outputs expected to vary each time:'); printBoard(generateBombBoard(2,2,1));
console.log('3x1 with 3 bombs - output expected to be a full board each time:'); printBoard(generateBombBoard(3,1,3));
console.log('1x3 with 0 bombs - output expected to be an empty board each time:'); printBoard(generateBombBoard(1, 3,0));
console.log('--------------------------------------------------');
// end testing
