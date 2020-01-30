// Business-Logic

function Game(board) {
    this.activePlayer = "x";
    this.board = [];
}

function Square() {
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


// Apply Mark
    // print X in selected div ID
    // assign X to div ID in JSON object

// checkForWinner
    // check for like values existing in winning combinations
    // if all boxes are filled with no winning combinations, game is over

// nextTurn
    // if x, update to o
    // vice versa
    // ternary operator js?


//User-Logic

$(document).ready(function(){
    var square = new Square();
    var game = new Game();
    console.log(game);

    // $("#player1-panel").css("background-color", "lightblue");
     $(".game-board").click(function() {
        var div = event.target.id;
        console.log(div); 
        //applyMark(div, game);
        //checkForWinner(game);
        //changeActivePlayer(game);
     });


    // $("#new-game").click(function() {
    //     newGame();
    // });
    // $("#instructions").click(function() {
    //     alert("Each turn, a player repeatedly rolls a die until either a 1 is rolled or the player decides to \"hold\": If the player rolls a 1, they score nothing and it becomes the next player's turn. If the player rolls any other number, it is added to their turn total and the player's turn continues. If a player chooses to \"hold\", their turn total is added to their score, and it becomes the next player's turn. The first player to score 100 or more points wins.");
    });
});