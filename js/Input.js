var catalyst = catalyst || {};
catalyst.yahtzee = catalyst.yahtzee || {};

catalyst.yahtzee.Input = (function (Game) {
	
	return {
    rollButtonClick: function( eventObj ) {
      
        Game.rollDice();
      
    },
    diceClick: function() {
      Game.dieClicked( $(this).attr('id').charAt(3) );
    },
    
    acesClick: function() {
      Game.scoreBoxClicked( CONSTANTS.ACES );
    },

    scoreBoxClick: function() {
      var element = '#' + $(this).attr('id');
      Game.scoreBoxClicked( element.substring(0, element.length - 5) );
    }
  };   

	
})(catalyst.yahtzee.Game);