function myFun(){
    console.log("--------------Promise Example---------------");
    console.log("Promise Example:")
    const status = true;
    console.log("Line 1");
    
    
    // promise defination:
    const promise = new Promise(function(resolve, reject){
        setTimeout(function(){
            if(status){
                resolve("Line 2");
            }else{
                reject("Fsiled");
            }
        },2000);
    });
    
    // promise call:
    promise
           .then(function(value){
                console.log(value);
           })
           .catch(function(err){
                console.log(err);
           })
    
    console.log("line 3");
    
}