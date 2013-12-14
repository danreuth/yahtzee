var catalyst = catalyst || {};
catalyst.yahtzee = catalyst.yahtzee || {};

catalyst.yahtzee.Display = (function () {
	
  function clearScreen() {
      $( 'div' ).hide();
  }
	return {
    showDice: function( diceSet ) {
      for(var i = 0; i < diceSet.length; i++) {
       // From Adam : change this to use CSS images and class switching 
        if( diceSet[i].shouldRoll() === true ) {
        //  $( '#die' + i ).toggleClass(diceSet[1].value.toString(), true);
          $( '#die' + i ).attr( 'src', 'images/' + diceSet[i].value + '.png' );
        } else {
          $( '#die' + i ).attr( 'src', 'images/' + diceSet[i].value + 'dark.png' );
        }
      }

      
      
    },
    showScoreCard: function( card ) {
      for(var i = 0; i < card.rows.length; i++) {
        // TODO Maybe jQuery each ?
        $( card.rows[i].selector + 'Text' ).text( card.rows[i].text );
        $( card.rows[i].selector + 'Value' ).text( card.rows[i].value );
        if(card.rows[i].total === undefined && card.rows[i].filled === false) {
          $( card.rows[i].selector + 'Value').css({"background-color":"red"});
        }
        if(card.rows[i].filled === true) {
          $( card.rows[i].selector + 'Value').css({"background-color":"green"});
        }
      }
    },

    
    showPlayerName: function ( name ) {
      $( '#displayPlayerName' ).text( name );
    },
    gameOver: function( winner ) {
      clearScreen();
      $( '#endGame').text("Game Over!!!/n" + winner + " wins!!!");
      $( '#endGame').show();
    },

    endTurn: function() {
      $( '#message' ).show();
    },

    newTurn: function() {
      $( '#message' ).hide();
    },

    setUp: function() {
      clearScreen();
      $( '#selectNumberPlayers' ).show();
      $( '.numPlayer' ).show();
     /* $( '#message' ).hide();
      $( '#rollNumber' ).hide();
      $( '#diceContainer' ).hide();
      $( '#rollButton' ).hide();
      $( '#scoreCard' ).hide();
      $( '#enterPlayerNames' ).hide();
      $( '#displayPlayerName' ).hide(); */
      
    },

    rollNumber: function( roll ) {
      if( roll === 0) {
        $( '#rollNumber' ).hide();
      } else {
        $( '#rollNumber' ).text("Roll " + roll );
        $( '#rollNumber' ).show();
      }
    },
     inputPlayerNames: function() {
      $( '#selectNumberPlayers' ).hide();
      $( '#enterPlayerNames' ).show();
    },
    startGame: function() {
      $( '#enterPlayerNames' ).hide();
      $( '#diceContainer' ).show();
      $( '#scoreCard' ).show();
      $( '#rollButton' ).show();
      $( '#displayPlayerName' ).show();
    }
   
  };   

	// From Adam : It is great that you are declaring everything that is being used by this object.  
  //    But since none of these objects are used in the code we can remove them, otherwise they will be required when unit testing something like this.
  //    Instead leave comments describing what objects should be used.
})();