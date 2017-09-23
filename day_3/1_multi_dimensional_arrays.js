// complex data structures
let array = ["Jacob", 42, true];
// you can mix data types in an array


let hobbies = ["BJJ", "Rock Climbing", "Coding"];

let me = ["Jacob", 38, true, hobbies];

let me = ["Jacob", 38, true, ["BJJ", "Rock Climbing", "Coding"] ];

let me = [  "Jacob", // 0
            38, // 1
            true, // 2
              //0        1               2
            ["BJJ", "Rock Climbing", "Coding"] // 3
          ];
me[0]; // "Jacob" - > string
me[3][1]; // "Rock Climbing"

let hobbies = me[3]; // ["BJJ", "Rock Climbing", "Coding"] -> array
hobbies[1]; // "Rock Climbing"

// tic tac toe
// [ O ] [   ] [   ]
// [   ] [ X ] [   ]
// [ O ] [   ] [ X ]

// multi-dimensional array, two-dimensional array
let row1 = ["O",  null, null];
let row2 = [null, "X",  null];
let row3 = ["O",  null, null];

let board = [row1, row2, row3];

let board = [
                row1,
                row2,
                row3
            ];

let board = [
              ["O", null, null],
              row2,
              row3
            ];

let board = [
         // col 0    1      2
              ["O",  null, null], // row 0
              [null, "X",  null], // row 1
              ["O",  null, "X" ] // row 2
            ];

// board[row][column]
board[1][0] = "X";
//              [
//          // col 0    1      2
//               ["O",  null, null], // row 0
//               ["X", "X",  null], // row 1
//               ["O",  null, "X" ] // row 2
//             ];

board[1][2] = "O";

//  ["O",  null, null], // row 0
//  ["X", "X",  "O"], // row 1
//  ["O",  null, "X" ] // row 2

// three dimensions
// rubix cube
// row, column and a face or colour

// http://html5rubik.com/





//
