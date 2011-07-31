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
	
	this.element = function(element){
		var value = element.value() || element;
		if (typeof elements[value] === 'undefined') {
			elements[value] = new Element(value);
		}
		return elements[value];
	}
}
