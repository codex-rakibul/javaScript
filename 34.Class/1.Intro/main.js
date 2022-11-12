//Create a class :
class Car {
    //constructor
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
    run(speed){
        console.log(this.name + ' is running in '+ speed);
    }
  }


  //Create a Object of Car Class :
const audi = new Car("Audi","2022");
const bmw = new Car("bmw","2019");


//funtion call :
audi.run("120km per hour");
bmw.run("85km per hour");