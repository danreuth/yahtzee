var catalyst = catalyst || {};
catalyst.yahtzee = catalyst.yahtzee || {};

catalyst.yahtzee.Random = (function () {
	function Random( lower, upper ) {
		if( typeof lower === 'number' && typeof upper === 'number' ) {
			return Math.floor( (Math.random() * upper ) + lower );
		} else {
			return 0;
		}
	}

	return Random;
})();