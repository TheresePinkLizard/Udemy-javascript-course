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
/*
'strict';

const jonas = {
    firstName: 'jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher', // string value
    friends: ['michael', 'peter', 'steven'], //array value. array er en annen type objekt
    hasDriversLicence: true, //boolean value
// function inni objekt, bruker :,  utenfor objekt blir det const calcAge = (birthyear)
// function value
    // calcAge: function(birthYear) { 
    //     return 2037 - birthYear;
    // }
    //annen versjon, bedre, automatisk henter alder
    // calcAge: function() { 
    //     return 2037 - this.birthYear; //this  refererer til jonas, siden den er inni objektet, 
    //     //prøv å unngå repetisjon, derfor gjør det slik
    // }
    calcAge: function() {  // lagre alder slik at den ikke trenger å kalkulerer funksjon om og om igjen
        this.age = 2037 - this.birthYear; //  lignende funksjon som property jonas.location
        return this.age; 
       
    }, // husk komma her
    //challenge. legger til : for å kalkulere om jonas har førerkort eller ikke
    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicence ? 'a' : 'no'} drivers licence`
    }
    // ved å bruke this kan man endre navn på objekt uten å måtte endre flere steder
};
//dot
console.log(jonas.calcAge()); // svar er 46, alderen i 2037
//bracket, trenger å være string ''
// console.log(jonas['calcAge'](1991)); //prøv å unngå repetisjon, derfor gjør det slik
console.log(jonas.calcAge());
// når kalkuleringen er gjort og man trenger å vise resultatet flere ganger så kan man i stedet 
// kan lagre svaret slik at den ikke må gjøre funksjonen om og om igjen

console.log(jonas.age); // mye bedre, effektiv

//------challenge
/*
// "jonas is a 46 year old teacher, and he has a drivers licence" (a or no)
// skisse. den fungerte, men kursholder ønsket noe annet
if (jonas.hasDriversLicence) {
    console.log(`${jonas.firstName} is a ${jonas.age} year old ${jonas.job}, and has a drivers licence `)
} else {
    console.log(`${jonas.firstName} is a ${jonas.age} year old ${jonas.job}, and does not have a drivers licence `)
}

console.log(jonas.getSummary());
*/

//-----CODING CHALLENGE 3
//lage objekt til begge
const mark = {
    name:'mark',
    mass: 78,
    height: 1.69,

    calcBMI = function() {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi
    }
}
const john = {
    name:'john',
    mass: 92,
    height: 1.95,


    calcBMI = function() {
        
    }
}
mark.calcBMI();
console.log(mark.bmi);

