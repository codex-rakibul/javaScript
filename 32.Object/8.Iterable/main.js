// for Array
// Array is Iterable
const array = [1,2,3,4,5,6,7,8,9,10];
console.log("Array :");
for (let i of array) {
    console.log(i);
}


// for Object
// Object is not Iterable
const object = {
    one: 1,
    two: 2,
    three: 3,
    four: 4
};
console.log("Object :");
for (let y in object) {
    console.log(object[y]);
}