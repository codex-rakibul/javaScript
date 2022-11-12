// Create a Class:
class Car {
    constructor(brand) {
      this.carname = brand;
    }
    present() {
      return 'I have a ' + this.carname;
    }
  }
  

  //To create a class inheritance, use the 'extends' keyword:
  class Model extends Car {
    constructor(brand, mod) {
      super(brand);
      this.model = mod;
    }
    show() {
      return this.present() + ', it is a ' + this.model;
    }
  }

  const myCar = new Model("Audi","Mustang");
  console.log(myCar.show());



//------------------------
// Use Getters and Setters:
  class Bus {
    constructor(name){
        this._carName = name;
    }
    get carName(){
        return this._carName;
    }
    set carName(n){
        this._carName = n;
    }

  }

  const myBus = new Bus();
  myBus.carName = "TATA";
  console.log(myBus.carName)
