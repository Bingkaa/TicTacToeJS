var grid = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
];

// Set buttons to be empty
var buttons = document.getElementsByTagName("button");
var endGame = false;

for (var i = 0; i < buttons.length; i++) {
    buttons[i].innerHTML = "\u2060";
}

// First turn should be o
var turn = "o";
document.getElementById("message").innerHTML = "It is currently " + turn + "'s turn.";

function chooseBox(element) {
    if (!endGame) {
        // Check if spot is already taken
        if (element.innerHTML != "\u2060") {
            document.getElementById("error").innerHTML = "That space is already taken.";
        } else {
            element.innerHTML = turn.toString();

            // Update our JS grid
            var row = element.id.split("")[0];
            var column = element.id.split("")[1];
            grid[row][column] = turn;

            // Check for winners
            checkWin();
            if (endGame) {
                return;
            }

            if (turn == "o") {
                turn = "x";
                document.getElementById("message").innerHTML = "It is currently " + turn + "'s turn.";
            } else {
                turn = "o";
                document.getElementById("message").innerHTML = "It is currently " + turn + "'s turn.";
            }
        }
    }
}

function checkWin() {
    // Horizontal & Vertical
    for (var i = 0; i < grid.length; i++) {
        if (grid[i][0] == turn && grid[i][1] == turn && grid[i][2] == turn) {
            document.getElementById("message").innerHTML = "Player " + turn + " won!";
            endGame = true;
        } else if (grid[0][i] == turn && grid[1][i] == turn && grid[2][i] == turn) {
            document.getElementById("message").innerHTML = "Player " + turn + " won!";
            endGame = true;
        }
    }

    // Diagonal moves
    if (grid[0][0] == turn && grid[1][1] == turn && grid[2][2] == turn) {
        document.getElementById("message").innerHTML = "Player " + turn + " won!";
        endGame = true;
    } else if (grid[0][2] == turn && grid[1][1] == turn && grid[2][0] == turn) {
        document.getElementById("message").innerHTML = "Player " + turn + " won!";
        endGame = true;
    }
}