"use strict";
try {
    x = 3.45 ;
} catch (error) {
    const p = document.getElementById("demo").innerHTML=
    `"use strict"<br>
      x = 3.45 <br> 
      ${error}`;
}


//use_strict  use in function
// x = 23;  // not error
// function show(){
//     "use strict";
//     y = 10;  // Reference error
// };