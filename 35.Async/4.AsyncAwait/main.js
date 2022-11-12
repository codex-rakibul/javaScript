function myFun(){
console.log("------------------Problem------------------");

//Course enrollment System:

//enrollment function:
function enrollment(){
    console.log("Course enrollment is a progress. . . ");
    console.log("Course fee: 5500tk");

    const payment = prompt("Enter course amount:");

    if(payment >= 5500){
        if( payment > 5500){
            cal = `Your resived money : ${payment}tk \n Money return: ${payment-5500}tk`;
            console.log(cal);
        }
        
        const paymentSuccess = true;
        
        const promise = new Promise(function(resolve, reject) {
            setTimeout(function(){
                if(paymentSuccess){
                    resolve();
                }else{
                    reject("Pyment failed ");
                }
            },2000);
        });
        return promise;

    }else{
        console.log("Not enough money");
    }

    
    
}


//progress function:
function progress(){
    console.log("Now, Courses is progress. . . ");

    const result = prompt("Enter your Marks:");
    const promise = new Promise(function(resolve, reject) {
        setTimeout(function(){
            if(result >= 80){
                resolve();
            }else{
                reject(" You Couldn't  not get enough marks to get the certificate");
            }
        },3000);
   });


   return promise;

}


//getCertificate function:
function getCertificate(){
    console.log("prepering your certificate");

    const promise = new Promise(function(resolve, reject) {
        setTimeout(function(){
            console.log("Countinue to next course . . .");
            const otherCourse = prompt("Yes or No :");
            if(otherCourse.match(/yes/gi)){
                resolve();
            }else{    
                reject("Thanks to journey for our course");
            }
        },1000);
    });
    return promise;
    
}



//otherCourse function:
function otherCourse(){
    console.log(". . . Done! . . .");

    //call again:
    setTimeout(function(){
        
    },5000);
}

//Use Async/Await:
async function course(){
    try {
        await enrollment();
        await progress();
        await getCertificate();
        const msg = await otherCourse();
        console.log(msg);
    } catch (error) {
        console.log(error);
        
    }
}
course();




}