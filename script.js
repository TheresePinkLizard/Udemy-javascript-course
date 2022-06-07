//-------OBJECTS
//array eksempel fra tidligere
/*
'strict';

const jonasArray = [
    'jonas',
    'schmedtmann',
    2037-1991,
    ['michael', 'peter', 'steven']
];
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


//-----CODING CHALLENGE 3
//lage objekt til begge personene
//this refererer til dette objektet
const mark = {
    name:'mark',
    mass: 78,
    height: 1.69,
    // kalkulere gjennomsnitt bmi i et objekt
    //.bmi lages her og er ikke skrevet et annet sted tidligere
    calcBMI: function() {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}
const john = {
    name:'john',
    mass: 92,
    height: 1.95,
    //kopiert akkurat samme funksjon, trenger ikke å gjøre noen endringer, hverken i objektet eller i funksjonen
    calcBMI: function() {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }

}
// kan gjøre dette direkte i console.log men dette er en annen metode
mark.calcBMI();
console.log(mark.bmi);

// tidligere metode
console.log(john.calcBMI(john.bmi));

// mark.bmi  refererer først til objekt mark og så refererer til bmi som vi lagde i function
if (mark.bmi > john.bmi){
    console.log(`${mark.name}'s bmi (${mark.bmi}) is higher than john's (${john.bmi})!`);
} else if (john.bmi > mark.bmi){
    console.log(`${john.name}'s bmi (${john.bmi}) is higher than mark's (${mark.bmi})!`);
}


//------ITERATION: THE FOR LOOP----


// isteden for dette
// console.log('lifthing weigths repetition 1');
// console.log('lifthing weigths repetition 1');
// console.log('lifthing weigths repetition 1');
// console.log('lifthing weigths repetition 1');

//  kan man gjøre dette
// let fordi det endres senere
//loopen kjører så lenge det nedenfor er sant. mindre eller det samme som 10
//rep ++ øker med en, hvis det skal øke med noe annet så er det rep = rep + 5
// første punkt sier hvor loopen starter, neste sier hvor den slutter og siste sier hvor mye den øker
// for(let rep = 1; rep <= 10; rep ++){
//     console.log('lifthing weigths repetition 1');
//     //putter 10 stk ved siden av setning i console
// }

// for(let rep = 1; rep <= 10; rep ++){
//     console.log(`lifthing weigths repetition ${rep}`);
//     // denne oppdaterer verdien inni stringen og det blir publisert flere ganger
// }
// under så starter den med 5 og ikke 1
// for(let rep = 5; rep <= 10; rep ++){
//     console.log(`lifthing weigths repetition ${rep}`);
//     // denne oppdaterer verdien inni stringen og det blir publisert flere ganger
// }
for(let rep = 1; rep <= 10; rep ++){
    console.log(`lifthing weigths repetition ${rep}`);
    // denne oppdaterer verdien inni stringen og det blir publisert flere ganger
}
*/



//-------LOOPING ARRAYS, BREAKING AND CONTINUING

/*
'strict';

// husk [] for array
const jonas = [
    'jonas', //string
    'schmedtmann', //string
    2037-1991, //number
    'teacher', // string
    ['michael', 'peter', 'steven'], // object
    true //boolean
];
const types = []; // har ikke noe inni seg fordi det skal basere se gpå jonas og blir definert inni loopen
//uten loop
//console.log(jonas[0]);

//med loop

// i står for iteration
// siden det er kun 4 ting i listen så må counter være under 5. som blir i<5
// jonas.length for å få med alle i listen slik at man ikke trenger å skrive noe konkret/endre det
for(let i = 0; i < jonas.length; i++){
    console.log(jonas[i], typeof jonas[i]); //i istedenfor 0
    // typeof for å se hva hver enkelt er(boolean? string? osv)
    //for å loope kun det som er typesof, lage egen types const og skrive inn under:
    //types[i] = typeof jonas[i];
    //annen metode
    types.push(typeof jonas [i]); //samme resultat
}
//types[0] = 'string'; (annen metode, uten loop)
console.log(types);

const years = [1991, 2007, 1969, 2020];

const ages = [];
// kalkulerer alder ved å ta 2037 - år i years array
for (let i = 0; i < years.length; i++){
    ages.push(2037 - years[i])
    //kalkulerer en og en 
}
console.log(ages); //viser resultat i console

// continue and break
//continue
console.log('---only strings----')
for(let i = 0; i < jonas.length; i++){
    //bare strings vises i console, hopper over annet. hvis iteration ikke er string, så fortsett
    if(typeof jonas[i] !== 'string') continue;
    console.log(jonas[i], typeof jonas[i]);    
}
//break
console.log('---break with number----')
for(let i = 0; i < jonas.length; i++){
    // hvis iteration er et nummer, så stopper loopen
    if(typeof jonas[i] === 'number') break;
    console.log(jonas[i], typeof jonas[i]);    
}
*/


//---------LOOPING BACKWARDS AND LOOPS IN LOOPS----------
/*
'strict';

const jonas = [
    'jonas', 
    'schmedtmann', 
    2037-1991,
    'teacher', 
    ['michael', 'peter', 'steven']
];

//baklengs loop

//starter på jonas.lenght. 
// hvis iterasjon er samme eller større enn 0. slik at det stopper der.
// i-- for å gå motsatt vei

for (let i = jonas.length - 1; i >= 0; i--){
    console.log(jonas[i]);
    // for å vise hvilket nr det er, putt inn 'i': console.log(i. jonas[i]);
}

//vanlig loop
for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`------starting exercise ${exercise}`);
    // exercise kommer 3 ganger i console
}

//Loop inni loop
// notat >= 5 er det samme som > 6
for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`------starting exercise ${exercise}`);

    for (let rep = 1; rep < 6; rep++){
        console.log(`lifting weight repetition ${rep}`);
    }
    // starting exercise vil loopes 3 ganger og for hver gang vil det starte en egen loop etter(under i console) som kjører 5 ganger
}

*/

//-------THE WHILE LOOP-------
/*
'strict';
// for referanse
/*
for(let rep = 1; rep <= 10; rep ++){
         console.log(`lifthing weigths repetition ${rep}`);
         
    }
/
/*
let rep = 1; //trengte ikke å lage en variabel med loop alene men trenger det nå
//denne kjøres imens noe er sant. i dette tilfelle kjøres den når rep er samme eller mindre enn 10
while (rep <= 10) {
    //console.log(`while test lifthing weigths repetition ${rep}`);
    rep++;
}
// terning kode
//math.trunc er for å fjerne desimaler
// math.random() * 6 for å lage et tilfeldig tall mellom 1(+1) og 6
let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);
// !== imens verdien er noe annet enn 6
while (dice !== 6) {
    console.log(`you rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    // === hvis dice er det samme som 6
    if (dice === 6) console.log('loop is about to end');
}
*/

//------CODING CHALLENGE 4------



'strict';



const calcTip = function (bills) {
    return bills >= 50 && bills <= 300 ? bills * 1.15 : bills * 0,2*;
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for(let i = 0; i < bills.length; i++){
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
}