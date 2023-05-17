var name = 'Nendy';
let age = '31';
var hasHobbies = 'play MMORPG';

age = 32;

const summarizeUser = (userName, userAge, userHasHobby) => {
  return (
    'Name is ' +
    userName +
    ', age is ' +
    userAge +
    ' and the user has hobbies: ' +
    userHasHobby
  );
};

// Understanding arrow function
// const add = (a, b) => a + b;
// const addOne = a => a + 1;
const addRandom = () => 1 + 2;

// console.log(add(1, 2));
// console.log(addOne(1));
console.log(addRandom());

console.log(summarizeUser(name, age, hasHobbies));

// if use node play.js on command the result will be:
// Name is Nendy, age is 31 and the user has hobbies: play MMORPG
// update age into 32: the print will be : Name is Nendy, age is 32 and the user has hobbies: play MMORPG
// arrow functions Print: 
// 3
// Name is Nendy, age is 32 and the user has hobbies: play MMORPG