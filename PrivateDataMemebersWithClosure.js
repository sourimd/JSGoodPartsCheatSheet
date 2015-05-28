var emplObject = (function(){
	var private_name = "Sourim";
	var private_age = 27;

	var temp = {
		public_getName: function(){ return private_name; },
		public_getAge: function(){ return private_age; },

		public_setName: function(name){ private_name = name; },
		public_setAge: function(age){ private_age = age; }
	};
	return temp;
})();

console.log( emplObject.public_getName() );
emplObject.public_setName("Das");
console.log( emplObject.public_getName() );