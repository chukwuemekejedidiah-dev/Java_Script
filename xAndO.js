const prompt = require("prompt-sync")();

// empty board
let b1=" ", b2=" ", b3=" ";
let b4=" ", b5=" ", b6=" ";
let b7=" ", b8=" ", b9=" ";

let player = "X";

while (true) {

    // show board
    console.log(`
 ${b1} | ${b2} | ${b3}
-----------
 ${b4} | ${b5} | ${b6}
-----------
 ${b7} | ${b8} | ${b9}
`);

    let move = prompt("Player " + player + ", choose (1-9): ");

    // place move
    if (move == 1 && b1 == " ") b1 = player;
    else if (move == 2 && b2 == " ") b2 = player;
    else if (move == 3 && b3 == " ") b3 = player;
    else if (move == 4 && b4 == " ") b4 = player;
    else if (move == 5 && b5 == " ") b5 = player;
    else if (move == 6 && b6 == " ") b6 = player;
    else if (move == 7 && b7 == " ") b7 = player;
    else if (move == 8 && b8 == " ") b8 = player;
    else if (move == 9 && b9 == " ") b9 = player;
    else {
        console.log("Invalid move!");
        continue;
    }

    // check win
    if (
        (b1==player && b2==player && b3==player) ||
        (b4==player && b5==player && b6==player) ||
        (b7==player && b8==player && b9==player) ||
        (b1==player && b4==player && b7==player) ||
        (b2==player && b5==player && b8==player) ||
        (b3==player && b6==player && b9==player) ||
        (b1==player && b5==player && b9==player) ||
        (b3==player && b5==player && b7==player)
    ) {
        console.log("Player " + player + " wins!");
        break;
    }

    // switch player
    if (player == "X") {
        player = "O";
    } else {
        player = "X";
    }
}