var catalyst = catalyst || {};
catalyst.yahtzee = catalyst.yahtzee || {};

catalyst.yahtzee.Input = (function (Game) {
	
	return {
    rollButtonClick: function( eventObj ) {
      
        Game.rollDice();
      
    },
    die0Click: function() {
      Game.dieClicked( 0 );
    },
    die1Click: function() {
      Game.dieClicked( 1 );
    },
    die2Click: function() {
      Game.dieClicked( 2 );
    },
    die3Click: function() {
      Game.dieClicked( 3 );
    },
    die4Click: function() {
      Game.dieClicked( 4 );
    }
  };   

	
})(catalyst.yahtzee.Game);