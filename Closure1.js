var intrusiveFunction = (function(){
	var localVar = 100;
	var getLocalVar = function(){
		return localVar;
	}
	return getLocalVar;
})();

console.log( intrusiveFunction() );