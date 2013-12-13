var catalyst = catalyst || {};
catalyst.yahtzee = catalyst.yahtzee || {};

catalyst.yahtzee.Game = (function (CONSTANTS, Dice, Roller, Display, Player) {
	var diceArray = new Array();
	for( var i = 0; i < CONSTANTS.NUMBER_DICE; i++ ) {
		diceArray[i] = new Dice( CONSTANTS.DICE_SIDES );
	}
  var player = new Player();
  
	return {
    rollDice: function() {
    	
      Roller.rollDice( diceArray );
      Display.showDice( diceArray );
      player.scoreCard.updateScores( diceArray );
      Display.showScoreCard( player.scoreCard );
    },
    dieClicked: function( dieNumber ) {
    	diceArray[dieNumber].toggleRoll();
    	Display.showDice( diceArray );
    },
    setUp: function() {
      Display.showScoreCard( player.scoreCard );
    },
    scoreBoxClicked: function( box ) {
      if(player.scoreCard.isBoxFilled( box ) !== true ) {
        player.endTurn( box );
        Display.showScoreCard( player.scoreCard );
      }
    }
  };  
	
})(catalyst.yahtzee.CONSTANTS, catalyst.yahtzee.Dice, catalyst.yahtzee.Roller, catalyst.yahtzee.Display, catalyst.yahtzee.Player);