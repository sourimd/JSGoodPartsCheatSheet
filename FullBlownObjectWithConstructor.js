var Employee = function( name, age, salary, dept ){
	//assign properties this way
	this.name = name;
	this.age = age;
	this.salary = salary;
	this.dept = dept;
}

//Employee is just a blue print and not a full blown object
//so Employee.propname wont add property propname to it

//Assign public methods this way
Employee.prototype.getName = function(){
	return this.name
}

Employee.prototype.getAge = function(){
	return this.age
}

Employee.prototype.getSalary = function(){
	return this.salary
}

Employee.prototype.getDept = function(){
	return this.dept
}

Employee.prototype.incrementSalary = function(inc){
	this.salary = this.salary + inc
}

var empl = new Employee("Sourim", 27, 76500, "SWE")
console.log( empl.getName() )

empl.incrementSalary(1000)
console.log( empl.getSalary() )