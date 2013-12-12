var catalyst = catalyst || {};
catalyst.yahtzee = catalyst.yahtzee || {};

catalyst.yahtzee.ScoreCard = (function (CONSTANTS) {
	function ScoreCard() {
		this.rows = [
		{
			text: CONSTANTS.ACES,
			value: 0,
			filled: false,
			selector: CONSTANTS.ACES_SELECTOR,
			calculate: function( diceSet ) {

			}
		},
		{
			text: CONSTANTS.TWOS,
			value: 0,
			filled: false,
			selector: CONSTANTS.TWOS_SELECTOR
		},
		{
			text: CONSTANTS.THREES,
			value: 0,
			filled: false,
			selector: CONSTANTS.THREES_SELECTOR
		},
		{
			text: CONSTANTS.FOURS,
			value: 0,
			filled: false,
			selector: CONSTANTS.FOURS_SELECTOR
		},
		{
			text: CONSTANTS.FIVES,
			value: 0,
			filled: false,
			selector: CONSTANTS.FIVES_SELECTOR
		},
		{
			text: CONSTANTS.SIXES,
			value: 0,
			filled: false,
			selector: CONSTANTS.SIXES_SELECTOR
		},
		{
			text : CONSTANTS.UPPER_SUB,
			value : 0,
			filled: false,
			selector: CONSTANTS.UPPER_SUB_SELECTOR
		},
		{
			text : CONSTANTS.BONUS,
			value : 0,
			filled: false,
			selector: CONSTANTS.BONUS_SELECTOR
		},
		{
			text : CONSTANTS.UPPER_TOTAL,
			value : 0,
			filled: false,
			selector: CONSTANTS.UPPER_TOTAL_SELECTOR
		},
		{
			text: CONSTANTS.THREE_KIND,
			value: 0,
			filled: false,
			selector: CONSTANTS.THREE_KIND_SELECTOR
		},
		{
			text: CONSTANTS.FOUR_KIND,
			value: 0,
			filled: false,
			selector: CONSTANTS.FOUR_KIND_SELECTOR
		},
		{
			text: CONSTANTS.FULL_HOUSE,
			value: 0,
			filled: false,
			selector: CONSTANTS.FULL_HOUSE_SELECTOR
		},
		{
			text: CONSTANTS.SMALL_STRAIGHT,
			value: 0,
			filled: false,
			selector: CONSTANTS.SMALL_STRAIGHT_SELECTOR
		},
		{
			text: CONSTANTS.LARGE_STRAIGHT,
			value: 0,
			filled: false,
			selector: CONSTANTS.LARGE_STRAIGHT_SELECTOR
		},
		{
			text: CONSTANTS.YAHTZEE,
			value: 0,
			filled: false,
			selector: CONSTANTS.YAHTZEE_SELECTOR
		},
		{
			text: CONSTANTS.CHANCE,
			value: 0,
			filled: false,
			selector: CONSTANTS.CHANCE_SELECTOR
		},
		{
			text: CONSTANTS.YAHTZEE_BONUS,
			value: 0,
			filled: false,
			selector: CONSTANTS.YAHTZEE_BONUS_SELECTOR
		},
		{
			text : CONSTANTS.LOWER_TOTAL,
			value: 0,
			filled: false,
			selector: CONSTANTS.LOWER_TOTAL_SELECTOR
		},
		{
			text : CONSTANTS.GRAND_TOTAL,
			value: 0,
			filled: false,
			selector: CONSTANTS.GRAND_TOTAL_SELECTOR
		}
		];
	}



	

	return ScoreCard;
})(catalyst.yahtzee.CONSTANTS);