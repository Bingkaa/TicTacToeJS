const resetBtn = document.getElementById("reset");
const endscreen = document.getElementById("end-screen");

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
            document.getElementById("error").innerHTML = "";
            element.innerHTML = turn.toString();

            // Update our JS grid
            var row = element.id.split("")[0];
            var column = element.id.split("")[1];
            grid[row][column] = turn;

            // Check for winners
            checkWin();

            if (endGame) {
                endscreen.classList.add("open");
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

    // Check for draw
    var draw = true;

    for (var row = 0; row < grid.length; row++) {
        for (var col = 0; col < grid[row].length; col++) {
            if (grid[row][col] == "") {
                draw = false;
                break;
            }
        }
        if (!draw) {
            break;
        }
    }

    if (draw) {
        document.getElementById("message").innerHTML = "It's a draw!";
        endGame = true;
    }
}

resetBtn.addEventListener("click", () => {
    endscreen.classList.remove("open");

    // Clear buttons
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].innerHTML = "\u2060";
    }

    // Reset the grid array
    grid = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ];

    // Reset the endGame variable
    endGame = false;

    // Reset the turn
    turn = "o";
    document.getElementById("message").innerHTML = "It is currently " + turn + "'s turn.";
})