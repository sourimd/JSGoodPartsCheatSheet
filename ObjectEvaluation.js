var animal = {
	name : "Tiger",
	age: 12,

	getName: function(){
		return this.name;
	},

	getAge: function(){
		return this.age
	},

	setName: function(name){
		this.name = name
	},

	setAge: function(age){
		this.age = age
	},
}

console.log( animal )
console.log( animal.getName() )

console.log( typeof animal.getName )
console.log( typeof animal.name )
console.log( typeof animal.age )