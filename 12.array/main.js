// In JavaScript, arrays use numbered indexes.  
// In JavaScript, objects use named indexes.
const array = new Array(20);
const arr = ["Audi", 101, "White"];
const demo = document.getElementById('demo');
console.log(typeof(arr[1]));

arr[3]="1200$";

//add new element to array "push"
arr.push("red");

//add new element to array 
arr[arr.length]="green";

//last element of array
console.log(arr[arr.length - 1]);


console.log("......for_loop......");
//all element print
for(i=0; i<=arr.length; i++){
    console.log(arr[i]);
}


console.log("......forEach......");
//forEach 
function forEach(value){
    console.log(value);
}
arr.forEach(forEach);


//looping array element:
txt = "<ul>";
for (let y = 0; y < arr.length; y++){
    txt += "<li>" + arr[y] + "</li>";
}
txt += "</ul>";

demo.innerHTML = txt;






