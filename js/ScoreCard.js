var catalyst = catalyst || {};
catalyst.yahtzee = catalyst.yahtzee || {};

catalyst.yahtzee.ScoreCard = (function (CONSTANTS, Dice, CardServices) {
	function ScoreCard() {
		this.haveFirstYahtzee = false;
		this.numberBonusYahtzees = 0;
		this.bonusYahtzeeInPlay = false;
		this.rows = [
		{
			text: CONSTANTS.ACES,
			value: 0,
			filled: false,
			selector: CONSTANTS.ACES_SELECTOR,
			calculate: function( diceSet ) {
				this.value = CardServices.calcNumbers( diceSet, CONSTANTS.ACES_VALUE);

			}
		},
		{
			text: CONSTANTS.TWOS,
			value: 0,
			filled: false,
			selector: CONSTANTS.TWOS_SELECTOR,
			calculate: function( diceSet ) {
				this.value = CardServices.calcNumbers( diceSet, CONSTANTS.TWOS_VALUE);
			}
		},
		{
			text: CONSTANTS.THREES,
			value: 0,
			filled: false,
			selector: CONSTANTS.THREES_SELECTOR,
			calculate: function( diceSet ) {
				this.value = CardServices.calcNumbers( diceSet, CONSTANTS.THREES_VALUE);
			}
		},
		{
			text: CONSTANTS.FOURS,
			value: 0,
			filled: false,
			selector: CONSTANTS.FOURS_SELECTOR,
			calculate: function( diceSet ) {
				this.value = CardServices.calcNumbers( diceSet, CONSTANTS.FOURS_VALUE);
			}
		},
		{
			text: CONSTANTS.FIVES,
			value: 0,
			filled: false,
			selector: CONSTANTS.FIVES_SELECTOR,
			calculate: function( diceSet ) {
				this.value = CardServices.calcNumbers( diceSet, CONSTANTS.FIVES_VALUE);
			}
		},
		{
			text: CONSTANTS.SIXES,
			value: 0,
			filled: false,
			selector: CONSTANTS.SIXES_SELECTOR,
			calculate: function( diceSet ) {
				this.value = CardServices.calcNumbers( diceSet, CONSTANTS.SIXES_VALUE);
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
				if(CardServices.isXOfAKind( diceSet, 3 )) {
					this.value = CardServices.totalDice( diceSet );
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
				if(CardServices.isXOfAKind( diceSet, 4 )) {
					this.value = CardServices.totalDice( diceSet );
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
				if( CardServices.isFullHouse( diceSet) || CardServices.isXOfAKind( diceSet, 5 ) ) {
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
				if( CardServices.isStraight( diceSet, CONSTANTS.SMALL_STRAIGHT_LENGTH ) || CardServices.isXOfAKind( diceSet, 5 )) {
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
				if( CardServices.isStraight( diceSet, CONSTANTS.LARGE_STRAIGHT_LENGTH ) || CardServices.isXOfAKind( diceSet, 5 )) {
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
				if(CardServices.isXOfAKind( diceSet, 5 )) {
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
				this.value = CardServices.totalDice( diceSet );
			}
		},
		{
			text: CONSTANTS.YAHTZEE_BONUS,
			value: 0,
			holdValue: 0,
			filled: false,
			selector: CONSTANTS.YAHTZEE_BONUS_SELECTOR,
			calculate: function( diceSet ) {

				if(CardServices.isXOfAKind( diceSet, 5 ) && haveFirstYahtzee === true ) {
					bonusYahtzeeInPlay = true;
					
				} 
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

		



	
	}
	return ScoreCard;
})(catalyst.yahtzee.CONSTANTS, catalyst.yahtzee.Dice, catalyst.yahtzee.CardServices);