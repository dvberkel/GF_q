GF = function(q){
	var modulus = q || 2;	
	
	this.modulus = function(){
		return modulus;
	}
	
	this.element = function(element){
		return element;
	}
}
