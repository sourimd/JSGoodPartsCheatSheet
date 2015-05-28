function sum(a,b){
	console.log(a+b);
	console.log( arguments.callee);
	console.log( arguments.callee.caller);
}

sum(4, 9);

var sum1 = function(a,b){
	console.log(a+b);
	console.log( arguments.callee); // This won't print anything as it is an anonymous function
									// but even then arguments.callee refers to the current function
}

sum1(10, 30);