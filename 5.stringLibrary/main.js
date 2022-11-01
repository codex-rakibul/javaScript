//length of string
var s = prompt("Enter a string");
var len = s.length;

const demo = document.getElementById("demo");
demo.innerHTML =`String length :  ${len}`

//String Index Number
console.log(s.charAt(2));

//Uppercase
console.log(s.toUpperCase());

//Lowercase
console.log(s.toLowerCase());

var concat = " Concatenate function"
//Concatenate function
console.log(s.concat(concat));

//slice
console.log(s.slice(0, 2));