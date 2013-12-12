var catalyst = catalyst || {};
catalyst.yahtzee = catalyst.yahtzee || {};

catalyst.yahtzee.ScoreCard = (function (CONSTANTS) {
	function ScoreCard() {
		this.aces = {
			text: CONSTANTS.ACES,
			value: 0
		};
		this.twos = {
			text: CONSTANTS.TWOS,
			value: 0
		};
		this.threes = {
			text: CONSTANTS.THREES,
			value: 0
		};
		this.fours = {
			text: CONSTANTS.FOURS,
			value: 0
		};
		this.fives = {
			text: CONSTANTS.FIVES,
			value: 0
		};
		this.sixes = {
			text: CONSTANTS.SIXES,
			value: 0
		};
		this.subTotalUpper = {
			text : CONSTANTS.UPPER_SUB,
			value : 0
		};
		this.bonus = {
			text : CONSTANTS.BONUS,
			value : 0
		};
		this.totalUpper = {
			text : CONSTANTS.UPPER_TOTAL,
			value : 0
		};
		this.threeOfAKind = {
			text: CONSTANTS.THREE_KIND,
			value: 0
		};
		this.fourOfAKind = {
			text: CONSTANTS.FOUR_KIND,
			value: 0
		};
		this.fullHouse = {
			text: CONSTANTS.FULL_HOUSE,
			value: 0
		};
		this.smallStraight = {
			text: CONSTANTS.SMALL_STRAIGHT,
			value: 0
		};
		this.largeStraight = {
			text: CONSTANTS.LARGE_STRAIGHT,
			value: 0
		};
		this.yahtzee = {
			text: CONSTANTS.YAHTZEE,
			value: 0
		};
		this.chance = {
			text: CONSTANTS.CHANCE,
			value: 0
		};
		this.yahtzeeBonus = {
			text: CONSTANTS.YAHTZEE_BONUS,
			value: 0
		};
		this.totalLower = {
			text : CONSTANTS.LOWER_TOTAL,
			value: 0
		};
		this.grandTotal = {
			text : CONSTANTS.GRAND_TOTAL,
			value: 0
		};
	}



	

	return ScoreCard;
})(catalyst.yahtzee.CONSTANTS);