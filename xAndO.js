const prompt = require("prompt-sync")();

let board = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
let player = prompt("Do you want to start with X or O? ");
while (player !== "X" && player !== "O" && player !== "x" && player !== "o") {
  player = prompt("Invalid choice. Please enter X or O: ");
}

if (player === "x") player = "X";
if (player === "o") player = "O";

let currentPlayer = player;

while (true) {
  // show board
  console.log(" " + board[0] + " | " + board[1] + " | " + board[2]);
  console.log("-----------");
  console.log(" " + board[3] + " | " + board[4] + " | " + board[5]);
  console.log("-----------");
  console.log(" " + board[6] + " | " + board[7] + " | " + board[8]);

  let move = prompt(`Player ${currentPlayer}, choose (1-9): `) - 1;
  if (board[move] !== " ") {
    console.log("Invalid move!");
    continue;
  }
  board[move] = currentPlayer;

  // check win
  let win = false;
  if (board[0] === currentPlayer && board[1] === currentPlayer && board[2] === currentPlayer) win = true;
  if (board[3] === currentPlayer && board[4] === currentPlayer && board[5] === currentPlayer) win = true;
  if (board[6] === currentPlayer && board[7] === currentPlayer && board[8] === currentPlayer) win = true;
  if (board[0] === currentPlayer && board[3] === currentPlayer && board[6] === currentPlayer) win = true;
  if (board[1] === currentPlayer && board[4] === currentPlayer && board[7] === currentPlayer) win = true;
  if (board[2] === currentPlayer && board[5] === currentPlayer && board[8] === currentPlayer) win = true;
  if (board[0] === currentPlayer && board[4] === currentPlayer && board[8] === currentPlayer) win = true;
  if (board[2] === currentPlayer && board[4] === currentPlayer && board[6] === currentPlayer) win = true;

  if (win) {
    console.log(" " + board[0] + " | " + board[1] + " | " + board[2]);
    console.log("-----------");
    console.log(" " + board[3] + " | " + board[4] + " | " + board[5]);
    console.log("-----------");
    console.log(" " + board[6] + " | " + board[7] + " | " + board[8]);
    console.log("Player " + currentPlayer + " wins!");
    break;
  }

  // switch player
  if (currentPlayer === "X") {
    currentPlayer = "O";
  } else {
    currentPlayer = "X";
  }
}