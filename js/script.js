// Business-Logic

// Constructor for creating a new game
function Game() {
  this.activePlayer = "X";
  this.boardSquares = [];
}

// Constructor for creating new squares
function Square(div, value) {
  this.div = div;
  this.value = value;
}

// Fill square variables and push them into game
Game.prototype.addSquare = function(game, div) {
    var value = game.activePlayer;
    var square = new Square(div, value);
    this.boardSquares.push(square);
}

// Apply user's mark on html page
Game.prototype.applyMark = function(game) {
    var element = game.boardSquares.length - 1;
    var div = game.boardSquares[element].div;
    var value = game.boardSquares[element].value;
    $("#" + div).html(value);
}

// checkForWinner
Game.prototype.checkForWinner = function(game) {

  // Establish winning array combinations
  winningArrays = [["sq0", "sq1", "sq2"], ["sq0", "sq3", "sq6"], ["sq0", "sq4", "sq8"], ["sq1", "sq4", "sq7"], ["sq2", "sq5", "sq8"], ["sq2", "sq4", "sq7"], ["sq3", "sq4", "sq5"], ["sq6", "sq7", "sq8"]];
  
  // Declare variables passed in from game
  var activePlayer = game.activePlayer;
  var element = game.boardSquares.length - 1;
  var div = game.boardSquares[element].div;
  var winningArrayValue = [];
  
  // Cycle through each potential winning array
  winningArrays.forEach(function(winningArray) {
    // Narrow down which winning arrays to check
    if (winningArray.includes(div)) {
      console.log("winningArray: " + winningArray);
      // Cycle through each item in the array
      for(i = 0; i < winningArray.length; i++){
        console.log("length of winning array: " + winningArray.length);
        // Find div string match in game
        for (j = 0; j < game.boardSquares.length; j++) {
          console.log("length of board squares: " + game.boardSquares.length);
          // If array square matches a game square
          if (winningArray[i] === game.boardSquares[j].div) {
            // Hold value of game square in an array to check against
            winningArrayValue[i] = game.boardSquares[j].value;
            console.log("winningArrayValue: " + winningArrayValue);
            if (winningArrayValue[0] === winningArrayValue[1] && winningArrayValue[0] === winningArrayValue[2]){
              alert(activePlayer + "is the winner!");
            }
          }
        }
      }
    }
  });
};

// Game moves turn to next Player
Game.prototype.nextTurn = function(game) {
  if (game.activePlayer === "X") {
      game.activePlayer = "O";
  } else {
      game.activePlayer = "X";
  }
}

// Reset the game variables and the DOM
function newGame(){
  var game = new Game;
  $(".square").html("");
  alert("X starts first!");
}

//User-Logic

$(document).ready(function() {
  
  // Start new game
  var game = new Game();

  // Game board highlights when user hovers over a div
  $(".square").hover(function() {
    var div = event.target.id;
    $("#" + div).css("background-color", "lightblue");
  }, function() {
    var div = event.target.id;
    $("#" + div).css("background-color", "whitesmoke");
  });

  // When user clicks a game tile, the following commands will execute
  $(".game-board").click(function() {
    var div = event.target.id;
    game.addSquare(game, div);
    game.applyMark(game);
    game.checkForWinner(game, div);
    game.nextTurn(game);
  });

  // Allows user to start a new game when pressing a new game button
  $("#new-game").click(function() {
    newGame();
  });
});
