//Inheritance using Object.create and .prototype method
var animal = {
	eats: true
}

//rabbit object inherits animal object
var rabbit = Object.create( animal )
rabbit.tail = true;

console.log( animal.eats );
console.log( rabbit.eats );
console.log( rabbit);

function Bat(name){
	this.name = name;
}

//Bat prototype inherits from animal object
Bat.prototype = animal;

var bat = new Bat("Bale")
console.log( bat.eats)
console.log( bat.name)
console.log( bat )
console.log( bat.hasOwnProperty("eats"))
// this won't update animal's eats property
bat.eats = false // now bat hasOwnProperty eats
console.log( bat)
console.log( animal)

console.log( bat.hasOwnProperty("eats"))