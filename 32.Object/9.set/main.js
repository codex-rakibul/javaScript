//create a set 
const letters = new Set(["s","o","n"]);


const a = "y";

// add()
letters.add(a);

console.dir(letters);

const p  = document.getElementById("demo");

let txt = "";
letters.forEach (function (value) {
    txt += value + " ";
})
p.innerHTML = txt;


// Create an Iterator
const myIterator = letters.values();

// List all Values
for (const entry of myIterator) {
  console.log(entry);
}