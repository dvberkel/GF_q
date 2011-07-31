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
	
	it("should create elements", function(){
		expect((new GF()).element(0)).toBeDefined();
	});
	
	it("should create identical elements", function(){
		var field = new GF();
		expect(field.element(1)).toBe(field.element(1));
	});
		
	describe("element", function(){
		var field = new GF(5);
		
		it("should have a value", function(){
			expect(field.element(0).value()).toBe(0);
		});
		
		it("should be normalized", function(){
			expect(field.element(1)).toBe(field.element(6));
		});
		
		describe("addition", function(){			
			it("should have a unit", function(){
				expect(field.zero()).toBe(field.element(0));
			});
			
			it("should operate on other element", function(){
				var a = field.element(2);
				var b = field.element(4);
				var sum = field.element(2 + 4);
				expect(a.plus(b)).toBe(sum);
			});
			
			it("should have an inverse element", function(){
				var a = field.element(2);
				var aNegated = field.element(3);
				expect(a.opposite()).toBe(aNegated);
			});
			
			it("should have an inverse operation", function(){
				var a = field.element(2);
				var b = field.element(4);
				var difference = field.element(2 + (field.modulus() - 4));
				expect(a.minus(b)).toBe(difference);
			});
		});
		
		describe("multiplication", function(){
			it("should have a unit", function(){
				expect(field.one()).toBe(field.element(1));
			});
			
			it("should operate on other element", function(){
				var a = field.element(2);
				var b = field.element(4);
				var product = field.element(2 * 4);
				expect(a.times(b)).toBe(product);
			});
			
			it("should have an inverse element", function(){
				var a = field.element(2);
				var aInverted = field.element(3);
				expect(a.inverse()).toBe(aInverted);
			});
			
			it("should have an inverse operation", function(){
				var a = field.element(2);
				var b = field.element(4);
				var dividend = field.element(-2); 
				expect(a.divide(b)).toBe(dividend);
			});
		});
	});
});
