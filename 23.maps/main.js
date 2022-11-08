// Create a Map
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200],
  ]);
  console.log(fruits);


  //Create a Map
  const car = new Map();

  // Set Map Values
  car.set("Audi","White");
  car.set("Mercedec","Black");
  car.set("LandRover","Red");
  console.log(car);
  
  //The get() method gets the value of a key in a Map:
  const pro = car.get("Audi");
  console.log(pro);

  //The delete() method removes a Map element:
  console.log(car.delete("Audi"));
  console.log(car);

  //The has() method returns true if a key exists in a Map:
  console.log(car.has("Mercedec"));



  //Students Bio Data
  const students = new Map([
    ["name","Rakibul Islam Sony"],
    ["id","01319106062"],
    ["Dept","CSE"],
    ["phone","+8801704081993"],
  ]);

  const demo = document.getElementById("demo");
  demo.innerHTML = students.get("name");

  
  const stdId = prompt("Enter your id :");

  //value find
  const values = [...students.values()];
  show();

  function show(){
    if(values.includes(stdId)){
        alert("Your id is Match...");
    }else{
        alert("Your id is not Match...");
    }
  };