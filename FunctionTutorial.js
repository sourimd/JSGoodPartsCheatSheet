function doSomething(){
	console.log("did");
}

doSomething()

var addFunction = function(a, b){
	return a+b
}

console.log( addFunction(12, 45) )

var anotherAddFunction = addFunction
console.log( anotherAddFunction(30, 15) );

console.log( typeof addFunction)