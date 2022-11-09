//1-100 numbers
//check single condition: 
//       1. number % 3 === 0 , 
//       2. number % 5 === 0
//check double condition: 
//       (number % 3 === 0 && number % 5 === 0)
//shortcut Way       (number % 15 === 0)

console.log("");
console.log("");
console.log("Problem_4-----------------------------");

function check(number){
    for(let i = 1; i <= number; i++){
        if(i % 15 === 0){
            console.log(`${i} is FizzBuzz`);
        }else if(i % 3 === 0){
            console.log(`${i} is Fizz`);
        }else if(i % 5 === 0){
            console.log(`${i} is Buzz`);
        }else{
            console.log(i);
        }
    }
}
console.log(check(100));

