// declared a  function
function myFunction(a,b) {
    return a * b;
};
console.log(myFunction(10,5));


//Function Expressions
const fun = function(a){
    return a * a;
};
let anonymousFunction = fun(10);  //anonymous function
console.log(anonymousFunction);


(function () {
    let x = "Hello!!";  //  anonymous self-invoking function
  })();



// Arrow function 
let a = (x,y) => {
    return x * y;
}
console.log(a(20,3));