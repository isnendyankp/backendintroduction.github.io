const person = {
  name: 'Max',
  age: 29,
  greet() {
    console.log('Hi, I am ' + this.name);
  }
};

const hobbies = ['Sports', 'Cooking'];
// for (let hobby of hobbies) {
//     console.log(hobby);
// }
// node value :
// Sports
// Cooking

console.log(hobbies.map(hobby => 'Hobby: ' + hobby));
console.log(hobbies);
// node value:
// [ 'Hobby: Sports', 'Hobby: Cooking' ]
// [ 'Sports', 'Cooking' ]