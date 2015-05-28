(function(){
	console.log("Self Invoking Function");
})();

var x = (function(){
	return 5;
})();

console.log( x );

//self executing function returns the function sum
var func = (function(){
	var sum = function(a, b){ 
		return a+b ; 
	};
	return sum;
})();

console.log( func(4, 5));