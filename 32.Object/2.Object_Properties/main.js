const person = {
    fname:"John",
    lname:"Doe",
    age:25
  }; 
  
  let txt = "";
  for (let x in person) {
    txt += person[x] + " ";
  }
  console.log(txt);
  
//Access nested objects:
  const myObj = {
    name: "John",
    age: 30,
    cars: {
    car1: "Ford",
    car2: "BMW",
    car3: "Fiat"
    }
  }
  let txt2 = "";
  for (let x2 in myObj.cars) {
    txt2 += myObj.cars[x2] + " ";
  }
  console.log(txt2);


//Nested JavaScript Objects and Arrays:
let x = "";
const myObj2 = {
  name: "John",
  age: 30,
  cars: [
    {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
    {name:"BMW", models:["320", "X3", "X5"]},
    {name:"Fiat", models:["500", "Panda"]}
  ]
}
for (let i in myObj2.cars) {
    x += "<h2>" + myObj2.cars[i].name + "</h2>";
    for (let j in myObj2.cars[i].models) {
      x += myObj2.cars[i].models[j] + "<br>";
    }
}
document.getElementById("demo").innerHTML = x;