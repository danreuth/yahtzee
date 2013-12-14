$( document ).ready( init ); 

function init() {
	$( '#rollButton' ).click(catalyst.yahtzee.Input.rollButtonClick);
	$( '.dice' ).click(catalyst.yahtzee.Input.diceClick);
	$( '.scoreBox').click(catalyst.yahtzee.Input.scoreBoxClick);
	$( '.numPlayer').click(catalyst.yahtzee.Input.numPlayerClick);
	$( '#playerNameSubmit').click(catalyst.yahtzee.Input.playerNameClick);
	$( '#playItAgainSam').click(catalyst.yahtzee.Input.playAgainClick);
	
/*	
	$( '#acesValue' ).click(catalyst.yahtzee.Input.die4Click); */

	catalyst.yahtzee.Game.setUp();
}
