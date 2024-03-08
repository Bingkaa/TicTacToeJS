var grid = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
];

// Set buttons to be empty
var buttons = document.getElementsByTagName("button");

for (var i = 0; i < buttons.length; i++) {
    buttons[i].innerHTML = "\u2060";
}

// First turn should be o
var turn = "o";
document.getElementById("message").innerHTML = "It is currently " + turn + "'s turn.";

function chooseBox(element) {
    // Check if spot is already taken
    if (element.innerHTML != "\u2060") {
        console.log(element.innerHTML);
        document.getElementById("error").innerHTML = "That space is already taken.";
    } else {
        element.innerHTML = turn.toString();

        // Update our JS grid
        var row = element.id.split("")[0];
        var column = element.id.split("")[1];
        grid[row][column] = turn;

        // Check for winners
        checkWin();

        if (turn == "o") {
            turn = "x";
        } else {
            turn = "o";
        }
    }
}

function checkWin() {
    // Horizontal & Vertical
    for (var i = 0; i < grid.length; i++) {
        if (grid[i][0] == turn && grid[i][1] == turn && grid[i][2] == turn) {
            document.getElementById("message").innerHTML = "Player " + turn + " won!";
        } else if (grid[0][i] == turn && grid[1][i] == turn && grid[2][i] == turn) {
            document.getElementById("message").innerHTML = "Player " + turn + " won!";
        }
    }

    // Diagonal moves
    if (grid[0][0] == turn && grid[1][1] == turn && grid[2][2] == turn) {
        document.getElementById("message").innerHTML = "Player " + turn + " won!";
    } else if (grid[0][2] == turn && grid[1][1] == turn && grid[2][0] == turn) {
        document.getElementById("message").innerHTML = "Player " + turn + " won!";
    }
}