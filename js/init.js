$( document ).ready( init ); 

function init() {
	$( '#rollButton' ).click(catalyst.yahtzee.Input.rollButtonClick);
	$( '.dice' ).click(catalyst.yahtzee.Input.diceClick);
	$( '.scoreBox').click(catalyst.yahtzee.Input.scoreBoxClick);
/*	
	$( '#acesValue' ).click(catalyst.yahtzee.Input.die4Click); */

	catalyst.yahtzee.Game.setUp();
}
