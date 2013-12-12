var catalyst = catalyst || {};
catalyst.yahtzee = catalyst.yahtzee || {};

catalyst.yahtzee.Input = (function (Game) {
	
	return {
    rollButtonClick: function( eventObj ) {
      
        Game.rollDice();
      
    },
    diceClick: function() {
      console.log($(this));
      
      
      Game.dieClicked( $(this).attr('id').charAt(3) );
    },
    
    acesClick: function() {
      Game.scoreBoxClicked( CONSTANTS.ACES );
    }
  };   

	
})(catalyst.yahtzee.Game);