// JavaScript always maintain  synchronous


// Asynchronous: "I will finish later!"
// * DataBase to data collect : this process is asynchronous
// *Server to data  load etc.

console.log("Line 1");

setTimeout(function(){
    console.log("Line 2");
},3000);

console.log("Line 3");