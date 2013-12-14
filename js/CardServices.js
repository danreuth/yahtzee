var catalyst = catalyst || {};
catalyst.yahtzee = catalyst.yahtzee || {};

catalyst.yahtzee.CardServices = (function (CONSTANTS, Dice, Roller, Display, Player) {
	return {
		getGrandTotal : function( card ) {
			return card.rows[18].value;
		},

		updateScores : function( diceSet, card ) {
			for(var i = 0; i < card.rows.length; i++) {
				if(card.rows[i].filled === false) {
					card.rows[i].calculate( diceSet );
				}
			}
		},

		calcTotals : function( card ) {
			var total = 0;
			for(var i = 0; i < 6; i++) {
				total += card.rows[i].value;
			}	
			card.rows[6].value = total;
			if(total >= CONSTANTS.BONUS_BOUND) {
				card.rows[7].value = 35;
			} else {
				card.rows[7].value = 0;
			}
			card.rows[8].value = card.rows[6].value + card.rows[7].value;
			total = 0;
			card.rows[16].value = CONSTANTS.YAHTZEE_BONUS_SCORE * card.rows[16].numberBonusYahtzees;
			for(var j = 9; j < 17; j++) {
				total += card.rows[j].value;
			}
			
			card.rows[17].value = total;
			card.rows[18].value = card.rows[17].value + card.rows[8].value;
		},

		fillBox : function ( box, card ) {
			if(card.rows[16].bonusYahtzeeInPlay) {
				card.rows[16].numberBonusYahtzees++;
				card.rows[16].bonusYahtzeeInPlay = false;
			}
			for(var i = 0; i < card.rows.length; i++) {
				if( card.rows[i].selector === box ) {
					if(box === CONSTANTS.YAHTZEE_SELECTOR && card.rows[i].filled === false && card.rows[i].value === CONSTANTS.YAHTZEE_SCORE ) {
						card.rows[16].haveFirstYahtzee = true;
					}
					card.rows[i].filled = true;
				}
			}
		},

		isBoxFilled : function ( box, card ) {
			var fill = false;
			for(var i = 0; i < card.rows.length; i++) {
				if(card.rows[i].selector === box && card.rows[i].filled === true) {
					fill = true;
				}
			}
			return fill;
		},
		zeroScores : function ( card ) {
			for(var i = 0; i < card.rows.length; i++) {
				if(card.rows[i].filled === false) {
					card.rows[i].value = 0;
				}
			}
		},
		calcNumbers : function( diceSet, number ) {
			
			var total = 0;
			for(var i = 0; i < diceSet.length; i++) {
				if(diceSet[i].value === number) {
					total += diceSet[i].value;
				}
			}
			return total;
		},
		totalDice : function( diceSet ) {
			var total = 0;
			for(var i = 0; i < diceSet.length; i++) {
					total += diceSet[i].value;
			}
			return total;
		},

		isXOfAKind : function( diceSet, x ) {
			
			var numberSet = [ 0, 0, 0, 0, 0, 0, 0 ];

			for(var i = 0; i < diceSet.length; i++) {
				numberSet[diceSet[i].value]++;
			}
			var returnValue = false;
			for(var j = 1; j <= numberSet.length; j++) {
				if(numberSet[j] >= x) {
					returnValue = true;
				}
			}
			return returnValue;	
		},
		isFullHouse : function( diceSet ) {
		 	var numberSet = [ 0, 0, 0, 0, 0, 0, 0 ];

			for(var i = 0; i < diceSet.length; i++) {
				numberSet[diceSet[i].value]++;
			}
			var threeOfKind = false;
			var pair = false;
			for(var j = 1; j <= numberSet.length; j++) {
				if(numberSet[j] === 3) {
					threeOfKind = true;
				}
				if(numberSet[j] === 2) {
					pair = true;
				}
			}
			return threeOfKind && pair;
		 },

		 isStraight : function( diceSet, type) {
		 	var numberSet = [ 0, 0, 0, 0, 0, 0, 0 ];

			for(var i = 0; i < diceSet.length; i++) {
				numberSet[diceSet[i].value]++;
			}
			var count = 0;
			var straight = false;
			for(var j = 1; j <= numberSet.length; j++) {
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
		
	};
})(catalyst.yahtzee.CONSTANTS, catalyst.yahtzee.Dice, catalyst.yahtzee.Roller, catalyst.yahtzee.Display, catalyst.yahtzee.Player);