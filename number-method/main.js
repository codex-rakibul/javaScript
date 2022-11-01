//number data type
var num = 20;
console.log(typeof(num));

//String data type
var num = "20";
console.log(typeof(num));

//Number to String convert
var num2 = 30;
num2 = toString(num2);
console.log(typeof(num2));

//String to Integer convert
var num3 = "30";
num3 = parseInt(num3);
console.log(typeof(num3));


//String to Float convert
var num3 = "30.99";
num3 = parseFloat(num3);
console.log(num3);

//The toFixed() method rounds a number to a given number of digits.
var num4 = 33.93272;
console.log(num4.toFixed(3));

//The toPrecision() method returns a string, with a number written with a specified length:
var num4 = 33.93272;
console.log(num4.toPrecision(3));