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
			total: true,
			selector: CONSTANTS.UPPER_SUB_SELECTOR,
			calculate: function( diceSet ) {

			}
		},
		{
			text : CONSTANTS.BONUS,
			value : 0,
			filled: false,
			total: true,
			selector: CONSTANTS.BONUS_SELECTOR,
			calculate: function( diceSet ) {

			}
		},
		{
			text : CONSTANTS.UPPER_TOTAL,
			value : 0,
			filled: false,
			total: true,
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
				if( isFullHouse( diceSet) ) {
					this.value = CONSTANTS.FULL_HOUSE_SCORE;
				} else {
					this.value = 0;
				}
			}
		},
		{
			text: CONSTANTS.SMALL_STRAIGHT,
			value: 0,
			filled: false,
			selector: CONSTANTS.SMALL_STRAIGHT_SELECTOR,
			calculate: function( diceSet ) {
				if( isStraight( diceSet, CONSTANTS.SMALL_STRAIGHT_LENGTH )) {
					this.value = CONSTANTS.SMALL_STRAIGHT_SCORE;
				} else {
					this.value = 0;
				}
			}
		},
		{
			text: CONSTANTS.LARGE_STRAIGHT,
			value: 0,
			filled: false,
			selector: CONSTANTS.LARGE_STRAIGHT_SELECTOR,
			calculate: function( diceSet ) {
				if( isStraight( diceSet, CONSTANTS.LARGE_STRAIGHT_LENGTH )) {
					this.value = CONSTANTS.LARGE_STRAIGHT_SCORE;
				} else {
					this.value = 0;
				}
			}
		},
		{
			text: CONSTANTS.YAHTZEE,
			value: 0,
			filled: false,
			selector: CONSTANTS.YAHTZEE_SELECTOR,
			calculate: function( diceSet ) {
				if(isXOfAKind( diceSet, 5 )) {
					this.value = CONSTANTS.YAHTZEE_SCORE;
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
			total: true,
			selector: CONSTANTS.LOWER_TOTAL_SELECTOR,
			calculate: function( diceSet ) {

			}
		},
		{
			text : CONSTANTS.GRAND_TOTAL,
			value: 0,
			filled: false,
			total: true,
			selector: CONSTANTS.GRAND_TOTAL_SELECTOR,
			calculate: function( diceSet ) {

			}
		}
		];

		this.updateScores = function( diceSet ) {
			for(var i = 0; i < this.rows.length; i++) {
				if(this.rows[i].filled === false) {
					this.rows[i].calculate( diceSet );
				}
			}
		}

		this.calcTotals = function() {
			var total = 0;
			for(var i = 0; i < 6; i++) {
				total += this.rows[i].value;
			}	
			this.rows[6].value = total;
			if(total >= CONSTANTS.BONUS_BOUND) {
				this.rows[7].value = 35;
			} else {
				this.rows[7].value = 0;
			}
			this.rows[8].value = this.rows[6].value + this.rows[7].value;
			total = 0;
			for(var j = 9; j < 17; j++) {
				total += this.rows[j].value;
			}
			this.rows[17].value = total;
			this.rows[18].value = this.rows[17].value + this.rows[8].value;
		}

		this.fillBox = function ( box ) {
			for(var i = 0; i < this.rows.length; i++) {
				if( this.rows[i].selector === box ) {
					this.rows[i].filled = true;
				}
			}
		}

		this.isBoxFilled = function ( box ) {
			var fill = false;
			for(var i = 0; i < this.rows.length; i++) {
				if(this.rows[i].selector === box && this.rows[i].filled === true) {
					fill = true;
				}
			}
			return fill;
		}
		this.zeroScores = function () {
			for(var i = 0; i < this.rows.length; i++) {
				if(this.rows[i].filled === false) {
					this.rows[i].value = 0;
				}
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
			
			var numberSet = [ 0, 0, 0, 0, 0, 0, 0 ];

			for(var i = 0; i < diceSet.length; i++) {
				numberSet[diceSet[i].value]++;
			}
			var returnValue = false;
			for(var j = 1; j <= diceSet.length; j++) {
				if(numberSet[j] >= x) {
					returnValue = true;
				}
			}
			return returnValue;	
		}
		 var isFullHouse = function( diceSet ) {
		 	var numberSet = [ 0, 0, 0, 0, 0, 0, 0 ];

			for(var i = 0; i < diceSet.length; i++) {
				numberSet[diceSet[i].value]++;
			}
			var threeOfKind = false;
			var pair = false;
			for(var j = 1; j <= diceSet.length; j++) {
				if(numberSet[j] === 3) {
					threeOfKind = true;
				}
				if(numberSet[j] === 2) {
					pair = true;
				}
			}
			return threeOfKind && pair;
		 }

		 var isStraight = function( diceSet, type) {
		 	var numberSet = [ 0, 0, 0, 0, 0, 0, 0 ];

			for(var i = 0; i < diceSet.length; i++) {
				numberSet[diceSet[i].value]++;
			}
			var count = 0;
			var straight = false;
			for(var j = 1; j <= diceSet.length; j++) {
				if(numberSet[j] >= 1) {
					count++;
				} else {
					count = 0;
				}
				if(count === type) {
					straight = true;
				}
			}
			return straight;
		 }
	}



	

	return ScoreCard;
})(catalyst.yahtzee.CONSTANTS, catalyst.yahtzee.Dice);