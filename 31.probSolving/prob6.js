// Delete falsy values in object
console.log("");
console.log("");
console.log("Problem_6-----------------------------");


const obj = {
    a: "lws",
    b: undefined,
    c: "Rakibul Islam Sony",
    d: false,
    e: "",
    f: "Apple",
    g: 40,
    h: "k",
    i: true,
    j: "Thanks all",
    k: NaN,
};

const truthyObject = function(obj){
    for(let i in obj){
        if(! obj[i]){
            delete obj[i];
        }
    }
    return obj;
}

console.log(truthyObject(obj));