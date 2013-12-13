var catalyst = catalyst || {};
catalyst.yahtzee = catalyst.yahtzee || {};

catalyst.yahtzee.ScoreCard = (function (CONSTANTS, Dice) {
	function ScoreCard() {
		this.rows = [
		{
			text: CONSTANTS.ACES,
			value: 0,
			filled: false,
			selector: CONSTANTS.ACES_SELECTOR,
			calculate: function( diceSet ) {
				this.value = calcNumbers( diceSet, CONSTANTS.ACES_VALUE);

			}
		},
		{
			text: CONSTANTS.TWOS,
			value: 0,
			filled: false,
			selector: CONSTANTS.TWOS_SELECTOR,
			calculate: function( diceSet ) {
				this.value = calcNumbers( diceSet, CONSTANTS.TWOS_VALUE);
			}
		},
		{
			text: CONSTANTS.THREES,
			value: 0,
			filled: false,
			selector: CONSTANTS.THREES_SELECTOR,
			calculate: function( diceSet ) {
				this.value = calcNumbers( diceSet, CONSTANTS.THREES_VALUE);
			}
		},
		{
			text: CONSTANTS.FOURS,
			value: 0,
			filled: false,
			selector: CONSTANTS.FOURS_SELECTOR,
			calculate: function( diceSet ) {
				this.value = calcNumbers( diceSet, CONSTANTS.FOURS_VALUE);
			}
		},
		{
			text: CONSTANTS.FIVES,
			value: 0,
			filled: false,
			selector: CONSTANTS.FIVES_SELECTOR,
			calculate: function( diceSet ) {
				this.value = calcNumbers( diceSet, CONSTANTS.FIVES_VALUE);
			}
		},
		{
			text: CONSTANTS.SIXES,
			value: 0,
			filled: false,
			selector: CONSTANTS.SIXES_SELECTOR,
			calculate: function( diceSet ) {
				this.value = calcNumbers( diceSet, CONSTANTS.SIXES_VALUE);
			}
		},
		{
			text : CONSTANTS.UPPER_SUB,
			value : 0,
			filled: false,
			selector: CONSTANTS.UPPER_SUB_SELECTOR,
			calculate: function( diceSet ) {

			}
		},
		{
			text : CONSTANTS.BONUS,
			value : 0,
			filled: false,
			selector: CONSTANTS.BONUS_SELECTOR,
			calculate: function( diceSet ) {

			}
		},
		{
			text : CONSTANTS.UPPER_TOTAL,
			value : 0,
			filled: false,
			selector: CONSTANTS.UPPER_TOTAL_SELECTOR,
			calculate: function( diceSet ) {

			}
		},
		{
			text: CONSTANTS.THREE_KIND,
			value: 0,
			filled: false,
			selector: CONSTANTS.THREE_KIND_SELECTOR,
			calculate: function( diceSet ) {
				if(isXOfAKind( diceSet, 3 )) {
					this.value = totalDice( diceSet );
				} else {
					this.value = 0;
				}
			}
		},
		{
			text: CONSTANTS.FOUR_KIND,
			value: 0,
			filled: false,
			selector: CONSTANTS.FOUR_KIND_SELECTOR,
			calculate: function( diceSet ) {
				if(isXOfAKind( diceSet, 4 )) {
					this.value = totalDice( diceSet );
				} else {
					this.value = 0;
				}
			}
		},
		{
			text: CONSTANTS.FULL_HOUSE,
			value: 0,
			filled: false,
			selector: CONSTANTS.FULL_HOUSE_SELECTOR,
			calculate: function( diceSet ) {

			}
		},
		{
			text: CONSTANTS.SMALL_STRAIGHT,
			value: 0,
			filled: false,
			selector: CONSTANTS.SMALL_STRAIGHT_SELECTOR,
			calculate: function( diceSet ) {

			}
		},
		{
			text: CONSTANTS.LARGE_STRAIGHT,
			value: 0,
			filled: false,
			selector: CONSTANTS.LARGE_STRAIGHT_SELECTOR,
			calculate: function( diceSet ) {

			}
		},
		{
			text: CONSTANTS.YAHTZEE,
			value: 0,
			filled: false,
			selector: CONSTANTS.YAHTZEE_SELECTOR,
			calculate: function( diceSet ) {
				if(isXOfAKind( diceSet, 5 )) {
					this.value = totalDice( diceSet );
				} else {
					this.value = 0;
				}

			}
		},
		{
			text: CONSTANTS.CHANCE,
			value: 0,
			filled: false,
			selector: CONSTANTS.CHANCE_SELECTOR,
			calculate: function( diceSet ) {
				this.value = totalDice( diceSet );
			}
		},
		{
			text: CONSTANTS.YAHTZEE_BONUS,
			value: 0,
			filled: false,
			selector: CONSTANTS.YAHTZEE_BONUS_SELECTOR,
			calculate: function( diceSet ) {

			}
		},
		{
			text : CONSTANTS.LOWER_TOTAL,
			value: 0,
			filled: false,
			selector: CONSTANTS.LOWER_TOTAL_SELECTOR,
			calculate: function( diceSet ) {

			}
		},
		{
			text : CONSTANTS.GRAND_TOTAL,
			value: 0,
			filled: false,
			selector: CONSTANTS.GRAND_TOTAL_SELECTOR,
			calculate: function( diceSet ) {

			}
		}
		];

		this.updateScores = function( diceSet ) {
			for(var i = 0; i < this.rows.length; i++) {
				this.rows[i].calculate( diceSet );
			}
		}

		var calcNumbers = function( diceSet, number ) {
			console.log("In calc number");
			var total = 0;
			for(var i = 0; i < diceSet.length; i++) {
				if(diceSet[i].value === number) {
					total += diceSet[i].value;
				}
			}
			return total;
		}

		var totalDice = function( diceSet ) {
			var total = 0;
			for(var i = 0; i < diceSet.length; i++) {
					total += diceSet[i].value;
			}
			return total;
		}

		var isXOfAKind = function( diceSet, x ) {
			var total = 0;
			var testCase = 0;
			for(var i = 0; i < diceSet.length; i++) {
				if(total >=x) {
					return true;
				}
				testCase = diceSet[i].value;
				for(var j = i + 1; j < diceSet.length; j++) {
					if(testCase === diceSet[j].value) {
						total++;
					}
				}
			}
			if(total >= x) {
				return true;
			} else {
				return false;
			}
		}
	}



	

	return ScoreCard;
})(catalyst.yahtzee.CONSTANTS, catalyst.yahtzee.Dice);