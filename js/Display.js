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
     // $('#die' + 1).attr('src', 'images/2.png');  
      
    },
    showScoreCard: function( card ) {
      $( '#acesText' ).text( card.aces.text );
      $( '#acesValue' ).text( card.aces.value );
      $( '#twosText' ).text( card.twos.text );
      $( '#twosValue' ).text( card.twos.value );
      $( '#threesText' ).text( card.threes.text );
      $( '#threesValue' ).text( card.threes.value );
      $( '#foursText' ).text( card.fours.text );
      $( '#foursValue' ).text( card.fours.value );
      $( '#fivesText' ).text( card.fives.text );
      $( '#fivesValue' ).text( card.fives.value );
      $( '#sixesText' ).text( card.sixes.text );
      $( '#sixesValue' ).text( card.sixes.value );
      $( '#subTotalUpperText' ).text( card.subTotalUpper.text );
      $( '#subTotalUpperValue' ).text( card.subTotalUpper.value );
      $( '#bonusText' ).text( card.bonus.text );
      $( '#bonusValue' ).text( card.bonus.value );
      $( '.totalUpperText' ).text( card.totalUpper.text );
      $( '.totalUpperValue' ).text( card.totalUpper.value );
      $( '#threeOfAKindText' ).text( card.threeOfAKind.text );
      $( '#threeOfAKindValue' ).text( card.threeOfAKind.value );
      $( '#fourOfAKindText' ).text( card.fourOfAKind.text );
      $( '#fourOfAKindValue' ).text( card.fourOfAKind.value );
      $( '#fullHouseText' ).text( card.fullHouse.text );
      $( '#fullHouseValue' ).text( card.fullHouse.value );
      $( '#smallStraightText' ).text( card.smallStraight.text );
      $( '#smallStraightValue' ).text( card.smallStraight.value );
      $( '#largeStraightText' ).text( card.largeStraight.text );
      $( '#largeStraightValue' ).text( card.largeStraight.value );
      $( '#yahtzeeText' ).text( card.yahtzee.text );
      $( '#yahtzeeValue' ).text( card.yahtzee.value );
      $( '#chanceText' ).text( card.chance.text );
      $( '#chanceValue' ).text( card.chance.value );
      $( '#yahtzeeBonusText' ).text( card.yahtzeeBonus.text );
      $( '#yahtzeeBonusValue' ).text( card.yahtzeeBonus.value );
      $( '#totalLowerText' ).text( card.totalLower.text );
      $( '#totalLowerValue' ).text( card.totalLower.value );
      $( '#grandTotalText' ).text( card.grandTotal.text );
      $( '#grandTotalValue' ).text( card.grandTotal.value );
    }
  };   

	
})(catalyst.yahtzee.Dice, catalyst.yahtzee.CONSTANTS, catalyst.yahtzee.ScoreCard);