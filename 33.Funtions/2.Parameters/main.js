//missing Argument:
function myFunction(x, y) {
    if (y === undefined) {
      y = 2;
    }
    return x * y;
  }
const a = myFunction(10);
console.log(a);



//ES6 allows function parameters to have default values:
function myFunction(x, y = 10) {
    return x + y;
  }
  myFunction(5);



//The rest parameter (...) allows a function 
//to treat an indefinite number of arguments as an array:
function sum(...args) {
    let sum = 0;
    for (let arg of args){
        sum += arg;
    } 
    return sum;
  }
let x = sum(1,2,3,4);
console.log(x);