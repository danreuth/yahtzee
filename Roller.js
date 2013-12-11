var catalyst = catalyst || {};
catalyst.yahtzee = catalyst.yahtzee || {};

catalyst.yahtzee.Roller = (function ( Dice, Random ) {
	function Roller( sides ) {
		
	}

	Roller.rollDice = function( diceSet ) {
		for( i = 0; i < diceSet.length; i++ ) {
			if( diceSet[i].shouldRoll ) {
				diceSet[i].value = Random.getRandomBetween( 1, diceSet[i].getNumSides() );
			}		
		}

	};

	return Roller;
})(catalyst.yahtzee.Dice, catalyst.yahtzee.Random);