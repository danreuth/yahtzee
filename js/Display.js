var catalyst = catalyst || {};
catalyst.yahtzee = catalyst.yahtzee || {};

catalyst.yahtzee.Display = (function () {
	
  function clearScreen() {
      $( '.hideable' ).hide();
  }
	return {
    showDice: function( diceSet ) {
      for(var i = 0; i < diceSet.length; i++) {
       // From Adam : change this to use CSS images and class switching 
       var pips = $( '#die' + i ).attr( 'pips' );
       $( '#die' + i ).toggleClass('dice' + pips, false);
       $( '#die' + i ).toggleClass('dice' + diceSet[i].value, true);
       $( '#die' + i ).attr( 'pips', diceSet[i].value );
        if( diceSet[i].shouldRoll() === true ) {

         $( '#die' + i ).toggleClass('held', false);
         $( '#die' + i ).toggleClass('notHeld', true);
        //  $( '#die' + i ).attr( 'src', 'images/' + diceSet[i].value + '.png' );
        } else {
          $( '#die' + i ).toggleClass('held', true);
          $( '#die' + i ).toggleClass('notHeld', false);
      //    $( '#die' + i ).attr( 'src', 'images/' + diceSet[i].value + 'dark.png' );
        }
      // $( '#die' + i ).toggleClass()
      }

      
      
    },
    showScoreCard: function( card ) {
      for(var i = 0; i < card.rows.length; i++) {
        // TODO Maybe jQuery each ?
        $( card.rows[i].selector + 'Text' ).text( card.rows[i].text );
        $( card.rows[i].selector + 'Value' ).text( card.rows[i].value );
        if(card.rows[i].total === undefined && card.rows[i].filled === false) {
          $( card.rows[i].selector + 'Value').css({"background-color":"#6D87BB"});
        }
        if(card.rows[i].filled === true) {
          $( card.rows[i].selector + 'Value').css({"background-color":"#593C06"});
        }
      }
    },

    
    showPlayerName: function ( name ) {
      $( '#displayPlayerName' ).text( name + "'s Turn" );
    },
    gameOver: function( winner, data ) {
      clearScreen();
      $( '#endGame').text("");
      for(var i = 0; i < data.length; i++) {
        $( '#endGame').append('<p class="finalScoreBoard">' + data[i].name + ' scored ' + data[i].score + '</p>');
      }
      $( '#endGame').append('<p class="winnerMessage">Game Over!!!</p><p class="winnerMessage">' + winner + ' wins!!!</p>');
      $( '#endGame').show();
      $( '#playItAgainSam').show();
    },

   // endTurn: function() {
   //   $( '#message' ).show();
   // },

   // newTurn: function() {
   //   $( '#message' ).hide();
   // },

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
      if( roll === 1) {
        $( '#rollButton' ).text("Make First Roll" );
      } else if ( roll === 2 ) {
        $( '#rollButton' ).text("Make Second Roll" );
      } else if (roll === 3) {
        $( '#rollButton' ).text("Make Third Roll" );
      } else {
        $( '#rollButton' ).text("Out Of Rolls" );
      }
       // $( '#rollNumber' ).hide();
     // } else {
       // $( '#rollButton' ).text("Make " + roll + "stRoll " + roll );
       // $( '#rollNumber' ).show();
      
    },
     inputPlayerNames: function() {
      $( '#selectNumberPlayers' ).hide();
      $( '#enterPlayerNames' ).show();
      $( '#playerNamePrompt' ).text("Player 1 Please Enter Your Name");
    },
    startGame: function() {
      clearScreen();
      $( '#diceContainer' ).show();
      $( '#scoreCard' ).show();
      $( '#rollButtonContainer' ).show();
      $( '#displayPlayerName' ).show();
    },
    upDatePlayerNamePrompt: function( playerNumber ) {
      $( '#playerNamePrompt' ).text("Player " + playerNumber + " Please Enter Your Name");
    },

    startScreen: function(startFunc) {
      clearScreen();
      $( '#startScreen' ).show();
      setTimeout(startFunc, 3000);  //Change to 3000 for production
    }
   
  };   

	// From Adam : It is great that you are declaring everything that is being used by this object.  
  //    But since none of these objects are used in the code we can remove them, otherwise they will be required when unit testing something like this.
  //    Instead leave comments describing what objects should be used.
})();