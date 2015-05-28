var divide = function( dividend, divisor){
	if( divisor == 0){
		var errorObject = {
			message: "Divide by zero",
		};
		throw errorObject;
	}
	else{
		return dividend/divisor;
	}
}

function mainFunction(){
	try{
		console.log( divide(12, 5));
		console.log(divide(5, 0) );
	}
	catch(e){
		console.log( "The error is "+e.message );
	}
}

mainFunction();