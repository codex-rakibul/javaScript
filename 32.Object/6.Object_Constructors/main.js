// Constructor function for Person objects
function Person(first, last, id) {
    this.firstName = first;
    this.lastName = last;
    this.id = id;
    this.fullName = function(){
      return this.firstName+ ""+ this.lastName;
    }
  }



// Create a Person object
const Name = new Person("Rakibul", "Islam Sony", 62);
Name.dept="cse";

for(let x in Name){
  console.log(Name[x]);
}
