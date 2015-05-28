var empl = {
	name: "Sourim",
	age: 27,
	toString: function(){
		var str = "Name:- " + this.name + " Age:- " + this.age;
		return str;
	}
}

console.log( empl.toString() )

function func(a,b){
	console.log( "Name:-"+this[a]+" Age:-"+this[b] )
}

func.call( empl, "name", "age")
func.apply( empl, ["name", "age"])