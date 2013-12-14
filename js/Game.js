var catalyst = catalyst || {};
catalyst.yahtzee = catalyst.yahtzee || {};

catalyst.yahtzee.Game = (function (CONSTANTS, Dice, Roller, Display, Player, CardServices) {
	var diceArray = new Array();
	for( var i = 0; i < CONSTANTS.NUMBER_DICE; i++ ) {
		diceArray[i] = new Dice( CONSTANTS.DICE_SIDES );
	}
  var numberPlayers;
  var playerLoad;
  var players = [];
  var player;
  var currentPlayer;
  var turn = 1;
  var roll = 1;
  function resetDice() {
    for(var i = 0; i < CONSTANTS.NUMBER_DICE; i++) {
      diceArray[i].setRoll( true );
    }
  }

  function endGame() {
    Display.gameOver( calcWinner() );
  }

  function calcWinner() {
    var highScore = 0;
    var winner;
    for(var i = 1; i <= numberPlayers; i++) {
      if(CardServices.getGrandTotal( players[i].scoreCard ) > highScore) {
        highScore = CardServices.getGrandTotal( players[i].scoreCard);
        winner = players[i].getPlayerName();
      }
    }
    return winner;
  }

  function startGame() {
    Display.startGame();
    currentPlayer = 1;
    player = players[currentPlayer];
    Display.showScoreCard( player.scoreCard );
    Display.showPlayerName( player.getPlayerName());
  }
	return {
    rollDice: function() {
    	if(roll <= 3) {
        Roller.rollDice( diceArray );
        Display.showDice( diceArray );
        Display.rollNumber( roll );
        CardServices.updateScores( diceArray, player.scoreCard );
        Display.showScoreCard( player.scoreCard );
        roll++;
        if(roll === 4) {
          Display.endTurn();
        }
      } 
    },
    dieClicked: function( dieNumber ) {
    	diceArray[dieNumber].toggleRoll();
    	Display.showDice( diceArray );
    },
    setUp: function() {
      Display.setUp();
    },
    scoreBoxClicked: function( box ) {
      if(CardServices.isBoxFilled( box, player.scoreCard ) !== true && roll != 1 ) {
       // player.endTurn( box );
        CardServices.fillBox( box, player.scoreCard );
        CardServices.zeroScores( player.scoreCard );
        CardServices.calcTotals( player.scoreCard );
        
        resetDice();
        Display.showDice( diceArray );
        roll = 1;
        if(currentPlayer === numberPlayers) {
          currentPlayer = 1;
          turn++;
        } else {
          currentPlayer++;
        }
        player = players[currentPlayer];
        Display.newTurn();
        Display.showScoreCard( player.scoreCard );
        Display.showPlayerName( player.getPlayerName());
        Display.rollNumber( 0 );
        if(turn === 14) {
          endGame();
        }
      }
    },
    selectNumPlayers: function( numPlayers ) {
      numberPlayers = numPlayers;
      playerLoad = 1;
      Display.inputPlayerNames();
      
    },
    enterPlayerName: function( playerName ) {
      console.log(playerName);
      players[playerLoad] = new Player( playerName );
      console.log(players[playerLoad]);
      playerLoad++;
      if(playerLoad > numberPlayers) {
        startGame();
      }
    }
  };  
	
})(catalyst.yahtzee.CONSTANTS, catalyst.yahtzee.Dice, catalyst.yahtzee.Roller, catalyst.yahtzee.Display, catalyst.yahtzee.Player, catalyst.yahtzee.CardServices);