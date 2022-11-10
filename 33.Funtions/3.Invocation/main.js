function a(){
    console.log(this)
    console.log("Runing. . .");
}
a();


const obj = {
    firstName: "Rakibul",
    lastName: "Islam Sony",


    fullName : function(){
        return this.firstName+ " " +this.lastName;
    }
};
//here "obj" role play to "this" keyword
console.log(obj.fullName());   