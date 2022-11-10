//All JavaScript objects inherit properties and methods from a prototype.
function Person(first, last, id) {
    this.firstName = first;
    this.lastName = last;
    this.id = id;
    
}

// Create a Person object:
const Sony = new Person("Rakibul", "Islam Sony", 62);
const Rinty = new Person("Rezwana", "Rinty", 04);

//add prototype:
Person.prototype.dept = "CSE";

//add funtion Prototype
Person.prototype.fullName = function(){
    return this.firstName + " " + this.lastName;
}
Person.prototype.examFee = function(value){
    return (value + 500);
}

console.log(Sony.fullName());
console.log("Exam Fee + Sem Fee : "+Sony.examFee(10000)+"tk");

