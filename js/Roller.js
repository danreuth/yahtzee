var catalyst = catalyst || {};
catalyst.yahtzee = catalyst.yahtzee || {};

catalyst.yahtzee.Roller = (function ( Dice, Random ) {
	function Roller( sides ) {
		
	}

	Roller.rollDice = function( diceSet ) {
		for( var i = 0; i < diceSet.length; i++ ) {
			if( diceSet[i].shouldRoll() == true ) {
				diceSet[i].value = Random( 1, diceSet[i].getNumSides() );
			}		
		}

	};

	return Roller;
})(catalyst.yahtzee.Dice, catalyst.yahtzee.Random);