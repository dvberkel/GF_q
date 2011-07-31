GCD = function(){
	this.gcd = function(a,b) {
		if (b == 0) {
			return a;
		} else {
			return this.gcd(b, a % b);
		}
	}
	
	this.egcd = function(a,b) {
		var _ = _egcd(a,b,1,0,0,1);
		result = {};
		result['gcd'] = _[0]; result[a] = _[1]; result[b] = _[2];
		return result;
	}
	
	var _egcd = function(a,b,s0,t0,s1,t1) {
		if (b == 0) {
			return [a,s0,t0];
		} else {
			q = Math.floor(a / b);
			return _egcd(b, a % b, s1, t1, s0 - q*s1, t0 - q*t1);
		}
	}
};
