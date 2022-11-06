//Random number
function getRandomNumber(min,max){
    return Math.floor(Math.random() * (max - min +1)) + min;
}
console.log(getRandomNumber(0,6)); 




// Name serial of alphabetically
//.sort();
//.reverse();
const students = ["Rinty", "Rakibul", "Mehedi", "Habib"];
console.log(students.sort());



//Number sort Accending
const points = [40, 100, 1, 5, 25, 10];
console.log(points.sort(function(a, b){return a - b}));

//Number sort decending
const points2 = [40, 100, 1, 5, 25, 10];
console.log(points2.sort(function(a, b){return b - a}));

