const fetchData = callback => {
    setTimeout(() => {
      callback('Done!');
    }, 1500);
  };

setTimeout(() => {
    console.log('Timer is done!');
    fetchData (text => {
      console.log(text);
      });
}, 2000);

console.log('Hello!');
console.log('Hi!');

// NodeJS result: 
// Hello!
// Hi!
// Timer is done! (with delay 2 seconds)
// Done!(with delay 1,5 seconds after timer is done) 