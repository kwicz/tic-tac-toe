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

// // checkForWinner
// Game.prototype.checkForWinner = function(game) {

//   // Establish winning array combinations
//   winningArrays = [["sq0", "sq1", "sq2"], ["sq0", "sq3", "sq6"], ["sq0", "sq4", "sq8"], ["sq1", "sq4", "sq7"], ["sq2", "sq5", "sq8"], ["sq2", "sq4", "sq7"], ["sq3", "sq4", "sq5"], ["sq6", "sq7", "sq8"]];
  
//   // Declare variables passed in from game
//   var activePlayer = game.activePlayer;
//   var element = game.boardSquares.length - 1;
//   var div = game.boardSquares[element].div;
//   var value = game.boardSquares[element].value;
//   var winningArrayValue = [];
//   var potentialWinningCombos = [];



  
//   // Cycle through each potential winning array
//   winningArrays.forEach(function(winningArray) {
//     // Narrow down which winning arrays to check
//     if (winningArray.includes(div)) {
//       potentialWinningCombos.push(winningArray);
//     }

//     // For each array in PWC
//     potentialWinningCombos.foreach(potentialWC) {
//       // Look in every entered move in game
//       for (i = 0; i < game.boardSquares.length; i++) {
//         // Check for squares previously marked by Active Player
//         if (game.boardSquares[i].value === activePlayer) {
          
//         }
//         for(x = 0; x < winningArray.length; x++) {

//         }
//       }
//     }



      // Cycle through all the gameboard squares to find the current square clicked
      for (i = 0; i < game.boardSquares.length; i++) {
        for(x = 0; x < winningArray.length; x++) {
          if (winningArray[x] === div) {
            // Get the value from the current square clicked
            console.log("x: " + x);
            winningArrayValue[x] = game.boardSquares[i].value;
            console.log("winningArrayValue: " + winningArrayValue);
            console.log("winningArray[x]: " + winningArray[x]);
            if (winningArrayValue[0] === value && winningArrayValue[1] === value && winningArrayValue[2] === value) {
              var winner = game.activePlayer;
              alert(winner);
            }
          }
        }  
      }
    };
  });
}

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