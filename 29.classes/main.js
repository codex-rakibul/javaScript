class Person{
    constructor(name,id){
        this.name = name;
        this.id = id;
    };
};

const name = prompt("Enter your name:");
const id = prompt("Enter your id:");

const d = new Person(name,id);
document.getElementById("demo")
.innerHTML = `
Name : ${d.name} 
<br>
Id : ${d.id}
`
