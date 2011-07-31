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
	
	this.opposite = function(){
		return this.element(modulus - this.value());
	}
	
	this.minus = function(that){
		return this.plus(that.opposite());
	}
	
	this.one = function(){
		return this.element(1);
	}
	
	this.times = function(that){
		return this.element(this.value() * that.value());
	}
	
	this.inverse = function(){
		var _ = this.egcd(modulus,this.value());
		return this.element(_[this.value()]);
	}
	
	this.divide = function(that){
		return this.times(that.inverse());
	}
	
	this.element = function(element){
		var value = normalizedValue(element);
		if (typeof elements[value] === 'undefined') {
			elements[value] = new Element(value);
		}
		return elements[value];
	}
	
	var normalizedValue = function(element) {
		var value = element['value'] ? element.value() : element % modulus;
		while (value < 0) { value += modulus }
		return value;
	}
}
GF.prototype = new GCD();
