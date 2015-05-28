function Animal(name){
	if(arguments.callee.count === undefined ){ //count is a static variable of Animal class
		arguments.callee.count = 0;
	}
	++arguments.callee.count;
	this.name = name;

	// arguments.callee.showCount = function(){ <-- this didn't work
	// 	return arguments.callee.count;
	// }
};

Animal.showCount = function(){ //<-- but this worked
	return Animal.count;
}
var bat = new Animal("Bale");
var cat = new Animal("Mini");

console.log( "The number of animals is "+Animal.count );
console.log( "The number of animals is "+Animal.showCount() );