var catalyst = catalyst || {};
catalyst.yahtzee = catalyst.yahtzee || {};

catalyst.yahtzee.Game = (function (CONSTANTS, Dice, Roller, Display, Player, CardServices) {
	var diceArray = new Array();
	for( var i = 0; i < CONSTANTS.NUMBER_DICE; i++ ) {
		diceArray[i] = new Dice( CONSTANTS.DICE_SIDES );
	}
  var player = new Player();
  var turn = 1;
  var roll = 1;
  function resetDice() {
    for(var i = 0; i < CONSTANTS.NUMBER_DICE; i++) {
      diceArray[i].setRoll( true );
    }
  }

  function endGame() {
    Display.gameOver();
  }

	return {
    rollDice: function() {
    	if(roll <= 3) {
        Roller.rollDice( diceArray );
        Display.showDice( diceArray );
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
      Display.showScoreCard( player.scoreCard );
    },
    scoreBoxClicked: function( box ) {
      if(CardServices.isBoxFilled( box, player.scoreCard ) !== true && roll != 1 ) {
       // player.endTurn( box );
        CardServices.fillBox( box, player.scoreCard );
        CardServices.zeroScores( player.scoreCard );
        CardServices.calcTotals( player.scoreCard );
        Display.showScoreCard( player.scoreCard );
        resetDice();
        Display.showDice( diceArray );
        roll = 1;
        turn++;
        Display.newTurn();
        if(turn === 14) {
          endGame();
        }
      }
    }
  };  
	
})(catalyst.yahtzee.CONSTANTS, catalyst.yahtzee.Dice, catalyst.yahtzee.Roller, catalyst.yahtzee.Display, catalyst.yahtzee.Player, catalyst.yahtzee.CardServices);