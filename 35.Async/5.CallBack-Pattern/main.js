//Course enrollment System:

//enrollment function:
function enrollment(callback){
    console.log("Course enrollment is a progress. . . ");
    console.log("Course fee: 5500tk");

    const payment = prompt("Enter course amount:");

    if(payment >= 5500){
        if( payment > 5500){
            cal = `Your resived money : ${payment}tk \n Money return: ${payment-5500}tk`;
            console.log(cal);
        }
        
        const paymentSuccess = true;
        
        setTimeout(function(){
            if(paymentSuccess){
                callback();
            }else{
                console.log("Pyment failed ");
            }
        },2000);
    }else{
        console.log("Not enough money");
    }
    
}


//progress function:
function progress(callback){
    console.log("Now, Courses is progress. . . ");

    const result = prompt("Enter your Marks:");

    setTimeout(function(){
        if(result >= 80){
            callback();
        }else{
            console.log(" You Couldn't  not get enough marks to get the certificate");
        }
    },3000);

}


//getCertificate function:
function getCertificate(callback){
    console.log("prepering your certificate");
   
    setTimeout(function(){
        console.log("Countinue to next course . . .");
        const otherCourse = prompt("Yes or No :");
        if(otherCourse.match(/yes/gi)){
           callback();
        }else{    
            console.log("Thanks to journey for our course");
        }
    },1000);
    
}



//otherCourse function:
function otherCourse(){
    console.log("Next couse now opening . . .");

    //call again:
    setTimeout(function(){
        enrollment(function(){
            progress(function(){
                getCertificate(otherCourse);
            });
        });
    },5000);
}



//call function:
enrollment(function(){
    progress(function(){
        getCertificate(otherCourse);
    });
});
