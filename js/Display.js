var catalyst = catalyst || {};
catalyst.yahtzee = catalyst.yahtzee || {};

catalyst.yahtzee.Display = (function (Dice, CONSTANTS, ScoreCard) {
	
	return {
    showDice: function( diceSet) {
      for(var i = 0; i < diceSet.length; i++) {
        if( diceSet[i].shouldRoll() === true ) {
          $( '#die' + i ).attr( 'src', 'images/' + diceSet[i].value + '.png' );
        } else {
          $( '#die' + i ).attr( 'src', 'images/' + diceSet[i].value + 'dark.png' );
        }
      }
      
      
    },
    showScoreCard: function( card ) {
      for(var i = 0; i < card.rows.length; i++) {
        $( card.rows[i].selector + 'Text' ).text( card.rows[i].text );
        $( card.rows[i].selector + 'Value' ).text( card.rows[i].value );
        if(card.rows[i].total === undefined && card.rows[i].filled === false) {
          $( card.rows[i].selector + 'Value').css({"background-color":"red"});
        }
        if(card.rows[i].filled === true) {
          $( card.rows[i].selector + 'Value').css({"background-color":"green"});
        }
      }
    }
   
  };   

	
})(catalyst.yahtzee.Dice, catalyst.yahtzee.CONSTANTS, catalyst.yahtzee.ScoreCard);