//create a object 
const person ={
    name: "John",
    id: "013",

    display : function(name){
        return this.name=name;
    },
};
console.log(person.display("Rakibul","01319106062"));
console.log(person.name);