var name = 'Nendy';
let age = '31';
var hasHobbies = 'play MMORPG';

age = 32;

function summarizeUser(userName, userAge, userHasHobby) {
    return (
        'Name is ' +
        userName +
        ', age is ' +
        userAge +
        ' and the user has hobbies: ' +
        userHasHobby
    );
}

console.log(summarizeUser(name, age, hasHobbies));

// if use node play.js on command the result will be:
// Name is Nendy, age is 31 and the user has hobbies: play MMORPG
// update age into 32: the print will be : Name is Nendy, age is 32 and the user has hobbies: play MMORPG