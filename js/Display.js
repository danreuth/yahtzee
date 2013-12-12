var catalyst = catalyst || {};
catalyst.yahtzee = catalyst.yahtzee || {};

catalyst.yahtzee.Display = (function (Dice) {
	
	return {
    showDice: function() {
      changeBy(1);
    },
    showScoreCard: function() {
      changeBy(-1);
    }
  };   

	
})(catalyst.yahtzee.Dice);