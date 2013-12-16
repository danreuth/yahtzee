describe("ScoreCard", function () {


	it("total dice", function () {
		
		expect(catalyst.yahtzee.CardServices.totalDice( [ {value : 1}, {value: 2}, {value: 1}, {value: 3}, {value: 1}] )).toBe(8);
	})

	it("total dice", function () {
		
		expect(catalyst.yahtzee.CardServices.totalDice( [ {value : 0}, {value: 2}, {value: 1}, {value: 0}, {value: 1}] )).toBe(4);
	})

	it("calc numbers", function () {
		
		expect(catalyst.yahtzee.CardServices.calcNumbers( [ {value : 1}, {value: 2}, {value: 1}, {value: 3}, {value: 1}], 1 )).toBe(3);
	})

	it("calc numbers", function () {
		
		expect(catalyst.yahtzee.CardServices.calcNumbers( [ {value : 1}, {value: 2}, {value: 1}, {value: 3}, {value: 1}], 4 )).toBe(0);
	})
	it("is x of a kind", function () {
		
		expect(catalyst.yahtzee.CardServices.isXOfAKind( [ {value : 1}, {value: 2}, {value: 1}, {value: 3}, {value: 1}], 3 )).toBe(true);
	})

	it("is x of a kind", function () {
		
		expect(catalyst.yahtzee.CardServices.isXOfAKind( [ {value : 1}, {value: 1}, {value: 1}, {value: 3}, {value: 1}], 4 )).toBe(true);
	})

	it("is x of a kind", function () {
		
		expect(catalyst.yahtzee.CardServices.isXOfAKind( [ {value : 2}, {value: 2}, {value: 2}, {value: 2}, {value: 2}], 5 )).toBe(true);
	})

	it("is x of a kind", function () {
		
		expect(catalyst.yahtzee.CardServices.isXOfAKind( [ {value : 4}, {value: 2}, {value: 1}, {value: 3}, {value: 1}], 3 )).toBe(false);
	})

	it("full house", function () {
		
		expect(catalyst.yahtzee.CardServices.isFullHouse( [ {value : 1}, {value: 3}, {value: 1}, {value: 3}, {value: 1}] )).toBe(true);
	})

	it("full house fail", function () {
		
		expect(catalyst.yahtzee.CardServices.isFullHouse( [ {value : 2}, {value: 3}, {value: 1}, {value: 3}, {value: 1}] )).toBe(false);
	})
	
	it("small straight ", function () {
		
		expect(catalyst.yahtzee.CardServices.isStraight( [ {value : 1}, {value: 2}, {value: 1}, {value: 3}, {value: 4}], 4 )).toBe(true);
	})
	
	it("large straight ", function () {
		
		expect(catalyst.yahtzee.CardServices.isStraight( [ {value : 1}, {value: 2}, {value: 5}, {value: 3}, {value: 4}], 5 )).toBe(true);
	})

	it("straight fail", function () {
		
		expect(catalyst.yahtzee.CardServices.isStraight( [ {value : 1}, {value: 2}, {value: 1}, {value: 1}, {value: 4}], 4 )).toBe(false);
	})

	/*it("calculate totals", function () {
		var card = new catalyst.yahtzee.ScoreCard();
		card.rows[0].value = 3;
		card.rows[1].value = 6;
		card.rows[2].value = 9;
		card.rows[3].value = 12;
		card.rows[4].value = 15;
		card.rows[5].value = 18;
		card.rows[9].value = 20;
		card.rows[10].value = 20
		card.rows[11].value = 25;
		card.rows[12].value = 30;
		card.rows[13].value = 40;
		card.rows[14].value = 50;
		card.rows[15].value = 10;
		expect(catalyst.yahtzee.CardServices.calcTotals( this.card )).toBe(293);
	}) */
})