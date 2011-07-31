GF = function(q){
	var modulus = q || 2;	
	var elements = {};
	
	var Element = function(value){
		var v = value;
		
		this.value = function() {
			return v;
		}
	};
	
	this.modulus = function(){
		return modulus;
	}
	
	this.zero = function(){
		return this.element(0);
	}
	
	this.one = function(){
		return this.element(1);
	}
	
	this.element = function(element){
		var value = element['value'] ? element.value() : element % modulus;
		if (typeof elements[value] === 'undefined') {
			elements[value] = new Element(value);
		}
		return elements[value];
	}
}
