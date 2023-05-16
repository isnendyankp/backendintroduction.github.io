var name = 'Nendy';
var age = '31';
var hasHobbies = 'play MMORPG';

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