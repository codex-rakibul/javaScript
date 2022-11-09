//input: linearSearch(['a','b','c','d','c'],'c')
//output: 2 or 'not found'
//problem: linearSearch() function implements......
console.log("");
console.log("");
console.log("Problem_2-----------------------------");
function linearSearch(arr, val){
    const length = arr.length;
    for(let i = 0; i < length; i++){
        if(arr[i] === val){
            return i;
        }
    }
    return 'not found';
}
console.log(linearSearch(['a','b','c','d','c'],'c'));