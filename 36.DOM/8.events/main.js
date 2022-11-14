function myFun(id){
    id.innerHTML = "Hello";
}
console.log("hello");


const p = document.getElementById('demo');
const input = document.getElementById('fname');

function changeEvent(){
    const value = input.value;
    p.innerHTML = value;
}