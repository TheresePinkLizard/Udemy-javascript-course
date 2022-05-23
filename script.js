//-------OBJECTS
//array eksempel fra tidligere
/*
'strict';

const jonasArray = {
    'jonas',
    'schmedtmann',
    2037-1991,
    ['michael', 'peter', 'steven']
};
//objekter. forskjellige metoder men {} er vanlig
const jonas = {
    firstName: 'jonas',
    age: 2037-1991,
    job: 'teacher',
    friends: ['michael', 'peter', 'steven']
};

'strict';

// ----- DOTS VS BRACKET
//---rekkefølger ble alfabetisk
const jonas = {
    firstName: 'jonas',
    lastName: 'Schmedtmann',
    age: 2037-1991,
    job: 'teacher',
    friends: ['michael', 'peter', 'steven']
};
console.log(jonas);
//henter etternavn og viseer i console
//dot metode
console.log(jonas.lastName);
//bracket metode
console.log(jonas['lastName']);

const nameKey = 'Name';
//denne fungerer ikke med dot metode. dot er den endelige objektet
//'' er en string
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);


const interestedIn = prompt('what do you want to know about jonas, choose between properties');
// siden resultatet ikke er endelig men vises avhengig av hva man skriver i promten så bruker man brackets[]
console.log(jonas[interestedIn]); // eks: viser teacher når du skriver job

if ( jonas[interestedIn]) { //er sant hvis en av proterties skrives inn
    console.log(jonas[interestedIn]); // derfor vil dette vises i console
    //hvis noe annet enn det som er oppført i listen skrives inn så vises under
} else {
    console.log('wrong property');
}
// legge til ekstra properties
//jonas refererer til objektet, location er den nye propertien på lik linje som job for eksempel
//dot metode

jonas.location = 'portugal';
//bracket metode
jonas['twitter'] = '@jonasschmedtman';
// nå er disse lagt til i listen i console som vi skrev tidligere
// blir ikke lagt i promt fordi den er etter prompt i koden 

//----challenge

//"jonas has 3 friends and his best friend is called michael"
//skrive setningen i kode
// ${jonas.friends.length} viser hvor mange  det er i en array
console.log(`${jonas.firstName} has ${jonas.friends.length} friends and his best friend is called ${jonas.friends[0]}`);
*/

//------OBJECT METHODS

