const person = {
    name: "John",
    age: 30,
    city: "New York"
  };
  
  let txt = "";
  for ( let x in person ) {
    txt += person[x] + " ";
  }
document.getElementById("demo").innerHTML = txt;
  
//Object values convert to array 
const arr = Object.values(person);
for(let y of arr) {
    console.log(y);
}
