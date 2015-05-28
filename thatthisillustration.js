var employee = {
	name: "Sourim",
	salary: 76500,

	increment: function( inc ){
		this.salary = this.salary + inc;
	},

	getSalary: function(){
		return this.salary;
	},

	decrement: function( dec ){
		//store "this" context into "that"
		//and then access the object properties 
		//using "that" var
		var that = this;
		var innerDecrementFunction = function(){
			that.salary = that.salary - dec;
		};
		innerDecrementFunction();
	}

}

console.log( "Current salary is " + employee.getSalary() )
employee.decrement(1000)
console.log( "Salary after decrement is " + employee.getSalary() )