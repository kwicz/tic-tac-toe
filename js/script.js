// Business-Logic

function Game() {
    this.activePlayer = "X";
    this.boardSquares = [];
}

function Square(div, value) {
    this.div = div;
    this.value = value;
}

function Values() {
    this.sq0 = sq0;
    this.sq1 = sq1;
    this.sq2 = sq2;
    this.sq3 = sq3;
    this.sq4 = sq4;
    this.sq5 = sq5;
    this.sq6 = sq6;
    this.sq7 = sq7;
    this.sq8 = sq8;
}

// Assign Values to Squares
Values.prototype.addValue = function(values, div){
    values.div = div;
    console.log("values div: " + values.sq0);
}

// Assign Square to Game
Game.prototype.addSquare = function (game, div) {
    var value = game.activePlayer;
    var square = new Square(div, value);
    this.boardSquares.push(square);
}

// Apply Mark
// print X in selected div ID
// assign X to div ID in JSON object
Game.prototype.applyMark = function (game) {
    var element = game.boardSquares.length - 1;
    var div = game.boardSquares[element].div;
    var value = game.boardSquares[element].value;
    $("#" + div).html(value);

}

// checkForWinner
// check for like values existing in winning combinations
// if all boxes are filled with no winning combinations, game is over
Game.prototype.checkForWinner = function (game) {};


//     winningArrays = [["sq0", "sq1", "sq2"], ["sq0", "sq3", "sq6"], ["sq0", "sq4", "sq8"], ["sq1", "sq4", "sq7"], ["sq2", "sq5", "sq8"], ["sq2", "sq4", "sq7"], ["sq3", "sq4", "sq5"], ["sq6", "sq7", "sq8"]];
//     var element = game.boardSquares.length - 1;
//     var div = game.boardSquares[element].div;
//     var value = game.boardSquares[element].value;
//     console.log("game: " + game)
//     winningArrays.forEach(function (winningArray) {
//         if (winningArray.includes(div)) {
//             console.log("winning array: " + winningArray)
//             if (winningArray[0] == winningArray[1] && winningArray[0] == winningArray[2]) {
//                 var winner = game.activePlayer;
//                 alert(winner);
//             }
//         };
//     });
// }

// Game moves turn to next Player
Game.prototype.nextTurn = function (game) {
    if (game.activePlayer === "X") {
        game.activePlayer = "O";
    } else {
        game.activePlayer = "X";
    }
}

// function newGame(){
//     var game = new Game;
//         $("#running-total").html("0");
//         $("#player1-score").html("0");
//         $("#player2-score").html("0");
//         $("#roll-result").html("0");
//         $("#player1-panel").css("background-color", "lightblue");
// }

//User-Logic

$(document).ready(function() {
    //var square = new Square();
    var game = new Game();
    var values = new Values();
    // assign Square to Game
    $(".square").hover(function() {
        var div = event.target.id;
        $("#" + div).css("background-color", "lightblue");
    } , function() {
        var div = event.target.id;
        $("#" + div).css("background-color", "whitesmoke");
    })

    // $("#player1-panel").css("background-color", "lightblue");
    $(".game-board").click(function() {
        var div = event.target.id;
        values.addValue(values, div);
        game.addSquare(game, div);
        game.applyMark(game);
        game.checkForWinner(game, div);
        game.nextTurn(game);

        console.log(game);

        // $("#new-game").click(function() {
        // alert("X starts first!");
        //      newGame();
        // });
    });
});