//Function Sequence
//JavaScript functions are executed in the sequence 
//they are called. Not in the sequence they are defined.

//-----------------------------------------------
//Display Function:
function myDisplayer(value){
    console.log(value);
}

//------------------------------------------------
function myFirst() {
    myDisplayer("Hello");
}
  
function mySecond() {
    myDisplayer("Goodbye");
}
  
myFirst(); //functions are executed in the sequence 
mySecond();


//------------------------------------------------
function calculation(a,b) {
  let sum = a + b;
  return sum;
}
const calculate =  calculation(10,20);
myDisplayer(calculate);


//-------------------CallBack----------------------
//In the example above, myDisplayer is a called a callback function.
//It is passed to multiple() as an argument.
console.log("/*         CallBack         */");
function multiple(a, b, CallBack) {
    CallBack(a*b);
} 
multiple(10, 5, myDisplayer);

// multiple(10, 5, function(result){ 
//       console.log(result);
// });