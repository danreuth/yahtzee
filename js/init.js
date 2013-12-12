$( document ).ready( init ); 

function init() {
	$( '#rollButton' ).click(catalyst.yahtzee.Input.rollButtonClick);
	$( '.dice' ).click(catalyst.yahtzee.Input.diceClick);
/*	
	$( '#acesValue' ).click(catalyst.yahtzee.Input.die4Click); */

	catalyst.yahtzee.Game.setUp();
}
