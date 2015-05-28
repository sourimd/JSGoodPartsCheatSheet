function namedFunction(){
	if( namedFunction.staticvar === undefined){
		namedFunction.staticvar = 0;
	}
	++namedFunction.staticvar;
	console.log( namedFunction.staticvar );
}

namedFunction();
namedFunction();
namedFunction();

var anonymousFunction = function(){
	if( arguments.callee.staticvar === undefined ){
		arguments.callee.staticvar = 0;
	}
	++arguments.callee.staticvar;
	console.log( arguments.callee.staticvar );
}

anonymousFunction();
anonymousFunction();
anonymousFunction();