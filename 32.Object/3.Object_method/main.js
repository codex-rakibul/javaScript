const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
  };
  person.name = function() {
    return (this.firstName + " " + this.lastName).toUpperCase();
  };
  
  document.getElementById("demo").innerHTML =
  "Name is " + person.name(); 