// Create a Set
const letters = new Set();
letters.add("a");
letters.add("b");
letters.add("c");

// Display set.size
document.getElementById("demo").innerHTML = letters.size;
console.log(letters);


// set with foreach
const letters2 = new Set(["a","b","c"]);
let text =" ";
letters2.forEach(function(value) {
    text += value;
});
console.log(text);
console.log(letters2.values());