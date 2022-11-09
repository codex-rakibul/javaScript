// Delete falsy values in array
console.log("");
console.log("");
console.log("Problem_5-----------------------------");

const mixedArray = [
    "lws",
    undefined,
    "Rakibul Islam Sony",
    false,
    "",
    "Apple",
    40,
    "k",
    true,
    "Thanks all",
    NaN
];

// const trueArray = mixedArray.filter(function(el){
//     if(el){
//         return true;
//     }else{
//         return false;
//     }
// });

const trueArray = mixedArray.filter(Boolean);
console.log(trueArray);