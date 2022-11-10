const person = {
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};

const person2 = {
    firstName: "Rakibul",
    lastName: "Islam Sony",
};
const person3 = {
    firstName: "Rezwana",
    lastName: "Rinty",
};

const p = person.fullName.call(person3);
console.log(p);


//const p = person.fullName.call(person3,parameter,parameter);