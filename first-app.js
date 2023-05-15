// running node js = node first-app.js(node file.js)
// console.log('Hello from Node.js');

//Untuk bisa menggunakan modul fs kita harus mengimpornya telebih dahulu dengan fungsi require().
const fs= require('fs');


//lalu membuat file txt dengan menggunakan writeFileSync
fs.writeFileSync('hello.txt', 'Hello from Node.js');

