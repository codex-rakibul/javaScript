//Search the big string in array 
//and show it, this string index number. . .

console.log("");
console.log("");
console.log("Problem_3-----------------------------");

function longestString(names){
    let longestWord = '';

    for(name of names){
        if(name.length > longestWord.length){
            longestWord = name;
        }
    }
    return [longestWord, names.indexOf(longestWord)];
}
console.log(longestString(['Rakibul Islam','Bangladesh is small country', 'sony', 'Rinty']));