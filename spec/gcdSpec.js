describe("GCD", function(){
	it("should calculate the greatest common divisor", function(){
		expect((new GCD()).gcd(37,51)).toBe(1);
	});
	
	it("should calculate the extended greatest commond divisor", function(){
		calculator = new GCD();
		result = calculator.egcd(37,51);
		expect(result.gcd).toBe(1);
		expect(result[37]).toBe(-11);
		expect(result[51]).toBe(8);
	});
});
