var catalyst = catalyst || {};
catalyst.yahtzee = catalyst.yahtzee || {};

catalyst.yahtzee.Random = (function () {
	function Random() {

	}

	Random.getRandomBetween = function( lower, upper ) {
		if( typeof lower === 'number' && typeof upper === 'number' ) {
			return Math.floor( (Math.random() * upper ) + lower );
		} else {
			return 0;
		}
	};

	return Random;
})();