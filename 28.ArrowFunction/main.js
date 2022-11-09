//Arrow Function
const arrow = document.getElementById("arrow");
show = (a,b) => {
    let sum =a + b;
    arrow.innerHTML = sum;
};


//---------------------------------------------------------------------------
//With a regular function this represents the object that calls the function:
hello = function() {
    document.getElementById("demo").innerHTML += this;
  }
  
  //The window object calls the function:
  window.addEventListener("load", hello);
  
  //A button object calls the function:
  document.getElementById("btn").addEventListener("click", hello);

  
  
  
//------------------------------------------------------------------
//With an arrow function this represents the owner of the function:
display = () =>{
    document.getElementById("demo2").innerHTML += this;
};
//The window object calls the function:
window.addEventListener("load", display);
  
//A button object calls the function:
document.getElementById("btn2").addEventListener("click", display);
 