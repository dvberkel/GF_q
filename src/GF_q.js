GF = function(q){
	var modulus = q || 2;	
	var elements = {};
	
	var Element = function(value){
		var v = value;
		
		this.value = function() {
			return v;
		}
	};
	Element.prototype = this;
	
	this.modulus = function(){
		return modulus;
	}
	
	this.zero = function(){
		return this.element(0);
	}
	
	this.plus = function(that){
		return this.element(this.value() + that.value());
	}
	
	this.negate = function(){
		return this.element(this.modulus() - this.value());
	}
	
	this.minus = function(that){
		return this.plus(that.negate());
	}
	
	this.one = function(){
		return this.element(1);
	}
	
	this.times = function(that){
		return this.element(this.value() * that.value());
	}
	
	this.element = function(element){
		var value = element['value'] ? element.value() : element % modulus;
		if (typeof elements[value] === 'undefined') {
			elements[value] = new Element(value);
		}
		return elements[value];
	}
}
