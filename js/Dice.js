var catalyst = catalyst || {};
catalyst.yahtzee = catalyst.yahtzee || {};

catalyst.yahtzee.Dice = (function () {
	function Dice( sides ) {
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
		};
		this.toggleRoll = function() {
			roll = !roll;
		}
	}

	return Dice;
})();