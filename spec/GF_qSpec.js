describe("GF(q)",function(){
	it("should exist", function(){
		expect(new GF()).toBeDefined();
	});
	
	it("should have a default modulus of 2", function(){
		expect((new GF()).modulus()).toBe(2);
	});
	
	it("should accept a different modulus", function(){
		expect((new GF(3)).modulus()).toBe(3);
	});
});
