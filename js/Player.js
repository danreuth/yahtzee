var catalyst = catalyst || {};
catalyst.yahtzee = catalyst.yahtzee || {};

catalyst.yahtzee.Player = (function (ScoreCard) {
	function Player( name ) {
		var playerName = name;
		this.scoreCard = new ScoreCard();
		
		this.getPlayerName = function() {
			return playerName;
		};

		this.endTurn = function( box ) {
			this.scoreCard.fillBox( box );
			this.scoreCard.zeroScores();
			this.scoreCard.calcTotals();
		};
	}

	return Player;
})(catalyst.yahtzee.ScoreCard);