const person = {
  name: 'Max',
  age: 29,
  greet() {
    console.log('Hi, I am ' + this.name);
  }
};

const copiedPerson = { ...person };
console.log(copiedPerson);
// Result : { name: 'Max', age: 29, greet: [Function: greet] }
// Spread operator

const hobbies = ['Sports', 'Cooking'];
// for (let hobby of hobbies) {
//     console.log(hobby);
// }
// console.log(hobbies.map(hobby => 'Hobby: ' + hobby));
// console.log(hobbies);

// symbol ... for Take the array or object after the operator and pull put all the elements or properties
const copiedArray = [...hobbies];
console.log(copiedArray);
// Result : [ 'Sports', 'Cooking' ]
