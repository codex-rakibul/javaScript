const person = {
    fullName: function (a,b) {
        return this.firstName + " " + this.lastName+ " live in: " +a + ","+b;
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

const p = person.fullName.apply(person3,["Mokamtola","Bogura"]);
console.log(p);

