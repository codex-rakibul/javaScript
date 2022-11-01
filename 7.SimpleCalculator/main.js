var num1 = prompt("Enter a first number : ");
var num2 = prompt("Enter a second number : ");

num1 = parseInt(num1);
num2 = parseInt(num2);

var d = parseFloat(num1/num2);
d = d.toFixed(2);

const cal = document.getElementById("demo");
cal.innerHTML=`
    /* \tAddition \t*/
    <br>
    ${num1} + ${num2} = ${num1 + num2}
    <br>
    <br>
    /*  Subtraction  */
    <br>
    ${num1} - ${num2} = ${num1 - num2}
    <br>
    <br>
    /*  Multiplication  */
    <br>
    ${num1} * ${num2} = ${num1 * num2}
    <br>
    <br>
    /*  Division  */
    <br>
    ${num1} / ${num2} = ${d}
`

