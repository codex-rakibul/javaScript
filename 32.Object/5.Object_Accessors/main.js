// get and set properties
const person = {
    firstName: "John",
    lastName: "Doe",
    language: "en",
    get lang() {
      return this.language;
    },
    set setLang(value) {
        this.language = value;
    },
  };
  const p = person.lang="bn";
  console.log(p);

  //The Object.defineProperty() method can also be used to add Getters and Setters:
  const person2 = {
    firstName: "John",
    lastName: "Doe",
    language: "en",
    sum:0,
   
  };
  Object.defineProperty(person2,"fullName",{
    get: function(){
        return this.firstName + " " + this.lastName;
    }
  });
  Object.defineProperty(person2,"Result",{
    set: function(value){
        this.sum = value+value;
    }
  });
const r = person2.Result=5;
console.log(person2.sum);