var catalyst = catalyst || {};
catalyst.yahtzee = catalyst.yahtzee || {};

catalyst.yahtzee.Roller = (function (Dice) {
	function Roller( sides ) {
		var numSides = sides;
		var roll = true;

		this.value = 1;

		this.getNumSides = function() {
			return numSides;
		};
		this.shouldRoll = function() {
			return roll;
		};
		this.setRoll = function( newRollValue ) {
			roll = newRollValue;
		}
	}

	Roller.rollDice = function( diceSet ) {

	};

	return Roller;
})(catalyst.yahtzee.Dice);