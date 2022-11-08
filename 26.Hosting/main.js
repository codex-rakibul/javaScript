//------------------------var-------------------------
// var x;
// x = undefine assign in memory
x = 5; // assign
const p = document.getElementById("demo");
p.innerHTML = ` var : ${x}`;
var x; // declare

//------------------------let-------------------------
// let y;
// y = not undefine assign in memory
y = 5;       //Reference error
const p2 = document.getElementById("demo2");
p2.innerHTML = ` let : ${y}`;   
let y; // declare

//------------------------const------------------------
name = "rakibul";
const name;   //Sysntax error
              // const can't be reassigned



