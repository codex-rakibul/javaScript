const img = document.querySelector('#img');
let x = true;
function myFun(){
    if(x){
        img.src = "img2.jpg";
        x = false;
    }else{
        img.src = "img1.jpg";
        x = true;
    }
    
}
