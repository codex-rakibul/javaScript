//How many "lorem" words in sentence
//First "lorem" text words position in sentence
console.log("Problem_1-----------------------------");
const sentence = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,quibusdam? Inventore ab quidem tempore voluptatum necessitatibus quia totam vero ad dolor sunt? Consequuntur nobis  lorem laboriosam autem obcaecati ullam eius lorem veniam.";
console.log(sentence);
console.log("--------------------------------------");

//How many "lorem" words in sentence:
const find = sentence.match(/lorem/gi);
const occurances = find ? find.length : 0;
console.log("How many \"lorem\" words in sentence : "+occurances);

//First "lorem" words index position in sentence:
let position = sentence.search(/lorem/i);
position = position >= 0 ? position : "Not found";
console.log("First \"lorem\" words index position : "+position);

