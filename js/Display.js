var catalyst = catalyst || {};
catalyst.yahtzee = catalyst.yahtzee || {};

catalyst.yahtzee.Display = (function (Dice) {
	
	return {
    showDice: function( diceSet) {
      for(var i = 0; i < diceSet.length; i++) {
        if( diceSet[i].shouldRoll() === true ) {
          $( '#die' + i ).attr( 'src', 'images/' + diceSet[i].value + '.png' );
        } else {
          $( '#die' + i ).attr( 'src', 'images/' + diceSet[i].value + 'dark.png' );
        }
      }
     // $('#die' + 1).attr('src', 'images/2.png');  
      
    },
    showScoreCard: function() {
      changeBy(-1);
    }
  };   

	
})(catalyst.yahtzee.Dice);