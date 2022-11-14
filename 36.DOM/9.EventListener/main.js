const btn = document.querySelector('#btn');
//The addEventListener() method:-
btn.addEventListener("click", myFun);
const p = document.getElementById('demo');

let x = true;
function myFun() {
    if(x){
        p.innerHTML = "Hello";
        x = false;
    }else{
        p.innerHTML = "Hey";
        x = true;
    }
    
}

//parameter passed to addEventListener:-
btn.addEventListener("click",myFun);

//******************************************************************//
//by default addEventListener work in "Event Bubbling":
// .First its work inner Div
// .Second its work outsite
//If you want to work with outsite first then use "Event Capturing":
// .Use 3rd parameter is (true)
//******************************************************************//
const button = document.getElementById("button");
const container = document.getElementById("container");

button.addEventListener("click",function(){
    show("Hello Button");
},true);
container.addEventListener("click",function(){
    show("Hello Div");
},true);

function show(txt) {
    console.log(txt);
}


