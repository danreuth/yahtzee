var catalyst = catalyst || {};
catalyst.yahtzee = catalyst.yahtzee || {};

catalyst.yahtzee.Game = (function (CONSTANTS, Dice, Roller, Display) {
	var diceArray = new Array();
	for( var i = 0; i < CONSTANTS.NUMBER_DICE; i++ ) {
		diceArray[i] = new Dice( CONSTANTS.DICE_SIDES );
	}
	return {
    rollDice: function() {
    	
      Roller.rollDice( diceArray );
      Display.showDice( diceArray );
    },
    dieClicked: function( dieNumber ) {
    	diceArray[dieNumber].toggleRoll();
    	Display.showDice( diceArray );
    }
  };  
	
})(catalyst.yahtzee.CONSTANTS, catalyst.yahtzee.Dice, catalyst.yahtzee.Roller, catalyst.yahtzee.Display);