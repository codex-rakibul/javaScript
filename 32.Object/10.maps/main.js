// Create a Map
// const fruits = new Map();
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);
  fruits.set("Lichi",600);

  console.log(fruits);

// List all entries
let text = "";
fruits.forEach (function(value, key) {
  text += key + " = " + value + " ";
})

const p = document.getElementById("demo");
p.innerHTML = text;


// // List all entries
// let text = "";
// for (const x of fruits.entries()) {
//   text += x;
// }

// // List all keys
// let text = "";
// for (const x of fruits.keys()) {
//   text += x;
// }

// // List all values
// let text = "";
// for (const x of fruits.values()) {
//   text += x;
// }