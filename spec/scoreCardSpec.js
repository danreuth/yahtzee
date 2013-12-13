describe("ScoreCard", function () {


	it("total dice", function () {
		var card = new ScoreCard();
		expect(card.totalDice( [ {value : 1}, {value: 2}, {value: 1}, {value: 3}, {value: 1}] )).toBe(8);
	})

	/*it("upperBoard Ones function", function (){

		expect(yahtzee.countInArray([0,0,0,0,0], 0 , true)).toBe(5);
	})
	it("upperBoard Twos function", function (){
		
		expect(yahtzee.countInArray([1,1,1,1,1], 1 , true)).toBe(10);
	})
	it("upperBoard Ones function", function (){
		
		expect(yahtzee.countInArray([2,2,2,2,2], 2 , true)).toBe(15);
	})
	it("upperBoard Ones function", function (){
		
		expect(yahtzee.countInArray([3,3,3,3,3], 3 , true)).toBe(20);
	})
	it("upperBoard Ones function", function (){
		
		expect(yahtzee.countInArray([4,4,4,4,4], 4 , true)).toBe(25);
	})
	it("upperBoard Ones function", function (){
		
		expect(yahtzee.countInArray([5,5,5,5,5], 5 , true)).toBe(30);
	}) */
	
})