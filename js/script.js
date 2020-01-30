// Business-Logic

function Game() {
    this.activePlayer = "x";
    this.boardSquares = [];
}

function Square(div, value) {
    this.div = div;
    this.value = value;
}

// Assign Square to Game
Game.prototype.addSquare = function(game, div) {
    var value = game.activePlayer;
    var square = new Square(div, value);
    this.boardSquares.push(square);
    console.log(game);
}

// Apply Mark
    // print X in selected div ID
    // assign X to div ID in JSON object
Game.prototype.applyMark = function(game) {
    var div = game.boardSquares[0].div;
    var value = game.boardSquares[0].value;
    console.log(div);
    $("#" + div).html(value);
}

// checkForWinner
    // check for like values existing in winning combinations
    // if all boxes are filled with no winning combinations, game is over

// nextTurn
    // if x, update to o
    // vice versa
    // ternary operator js?

// function checkRoll(game, roll) {
//     if (game.points.includes(roll)) {
//         game.tempScore += roll;
//         $("#running-total").html(game.tempScore);
//     } else {
//         nextTurn(game);
//     }
// }

// function nextTurn(game, tempScore) {
//     if (game.turn === "player1") {
//         if (tempScore) {
//             game.player1Score += tempScore;
//             $("#player1-score").html(game.player1Score);
//         }
//         game.turn = "player2";
//         $("#player2-panel").css("background-color", "lightblue");
//         $("#player1-panel").css("background-color", "whitesmoke");
//     } else {
//         if (tempScore) {
//             game.player2Score += tempScore;
//             $("#player2-score").html(game.player2Score);
//         }
//         game.turn = "player1";
//         $("#player1-panel").css("background-color", "lightblue");
//         $("#player2-panel").css("background-color", "whitesmoke");
//     } 
//     game.tempScore = 0;
//     $("#running-total").html(game.tempScore);
// }

// function checkWinner(game) {
//     if (game.player1Score >= 20 || game.player2Score >=20) {
//         alert(game.turn + " has won the game!");
//         newGame();
//     }
// }

// function newGame(){
//     var game = new Game;
//         $("#running-total").html("0");
//         $("#player1-score").html("0");
//         $("#player2-score").html("0");
//         $("#roll-result").html("0");
//         $("#player1-panel").css("background-color", "lightblue");
// }

//User-Logic

$(document).ready(function(){
    //var square = new Square();
    var game = new Game();
    // assign Square to Game

    // $("#player1-panel").css("background-color", "lightblue");
     $(".game-board").click(function() {
        var div = event.target.id;
        game.addSquare(game, div);
        game.applyMark(game);

        //checkforWinner()
        //changeActivePlayer()

    // $("#new-game").click(function() {
        // alert("X starts first!");
    //     newGame();
    // });
    // $("#instructions").click(function() {
    //     alert("");
    });
});