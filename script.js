//-----Fundamentals part 2 ---

//MENY
//KAPITTLER:                                        KODE: 
//32------ACTIVATING STRICT MODE-----------------------11
//33------------  FUNCTIONS ---------------------------28
//34----FUNCTION DECLARATIONS VS. EXPRESSIONS----------71
//35------ARROW FUNCTIONS------------------------------95
//36----------FUNCTIONS CALLING OTHER FUNCTIONS-------118

'use strict';
/*
// 32----strict----
// må ha strict kode øverst for at det skal bli aktivert
// 
// hvis man skriver feil så kommer det opp mld i console pga use strict, ellers er det ikke alltid det vises
// let kan endres
// const er konstant (bruk dette )

let hasDriversLicence = false;
const passTest = true;
if (passTest) hasDriversLicence = true;


if (hasDriversLicence) console.log('I can drive');

//under ser man forslag på ord som kan skape error fordi det kan bli brukt til noe annet i fremtiden (interface, private osv) ordene er reservert
//const interface = 'audio';
//const private = 534;
// const if = 23;
*/

//33------------  FUNCTIONS -----------------
/*
'use strict';


function logger() {
    console.log('My name is Jonas');
}


//eksempel på function, functions er til for å brukes flere ganger
// calling /running / invoking function
logger(); // setter igang function over
logger();
logger();

// eksempel på annet det kan gjøre. den kan brukes flere ganger, ta imot data og sende tilbake data

// under er en function som henter informasjon om hvor mange frukt man har

function fruitProcessor(apples, oranges) {
    const juice = `juice with ${apples} apples and ${oranges} oranges`;
    return juice; // henter info utenfra og legger inn i juice over
}
const applejuice = fruitProcessor(5, 0); // her legger man til verdien til apples and oranges, 
//men det er ikke dette som putter det i console. må lagres i en variabel først(const)

console.log(applejuice); //her puttes det i console

// annen metode     
console.log(fruitProcessor(5, 0));


const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

//lignende eksempel
const num = Number('23');
*/

//------FUNCTION DECLARATIONS VS. EXPRESSIONS------
/*
'use strict';
//function declaration
function calcAge1(birthYear) {
    //eksempel slik det ble gjort tidligere
    // const age = 2037 - birthYear;
    // return age;
    // bedre metode
    return 2037 - birthYear;
}
const age1 = calcAge1(1991); //kan putte denne før function(men ikke en god ide) og definere det senere i koden, men det fungere ikke med expression metoden

//function expression 
//(fungerer på samme måte som decleration) men skrives på forskjellig måte avhengig av behov. det kommer senere kurset. forskjellen er første linje
// en variabel som heolder en funksjon. funksjon er en verdi, derfor kan man legge det i en variabel

const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge2(1991);
//begge resultatene i console
console.log(age1, age2);

// handler om preferanse hvilken man velger å bruke(kursholder liker å bruke expressions for å holde seg til å skrive function først og definere snere i koden)
*/


//--------ARROW FUNCTIONS--------
/*
// Dette er en tredje type
'use strict';
//Arrow function (heter arrow function pga =>)
//brukes ikke til 'this'?
//komprimert function enda mer. 
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);


// annet eksempel. trenger {} under fordi mer kode skal inn
// () brukes fordi to verdier skal inn, hvis det bare er en så trenger man ikke parantes
const yearsUntilRetirement = (birthYear, firstName) => {
    // kalkulerer alder
    const age = 2037 - birthYear;
    //kalkulerer år igjen til retirement
    const retirement = 65 - age;
    // må legge til return slik når det er flere ting 
    // return retirement; (hvis det kun er en)
    return `${firstName} retires in ${retirement} years`;
}
// under er slik at resultat av funksjon blir lagt til i console direkte.
//legger også verdien inn her
//verdi til venstre går til venstre(birthyear) og høyre til høyre(firstname)
console.log(yearsUntilRetirement(1991, 'Jonas'));

//test med annen verdi
console.log(yearsUntilRetirement(1980, 'Bob'));


*/
//----------FUNCTIONS CALLING OTHER FUNCTIONS------
/*
'use strict';
function cutFruitPieces(fruit) {
    return fruit * 4;
}
function fruitProcessor(apples, oranges) {
    //kaller en funksjon inni en annen funksjon
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;
    return juice;
}
//denne under kaller fruitprocessor(som sender 2 som verdi opp til funksjonen) som kaller cutfruitpieces, som også tar med seg 2, som erstatter fruit parameteren med 2. som da regner 2 * 4 = 8. nummeret 8 blir lagret i applepieces variabelen.
console.log(fruitProcessor(2, 3));

//eks andre tall
console.log(fruitProcessor(6, 9));

*/
//-----------REVIEWING FUNCTIONS-----
/*
'use strict';
const calcAge = function (birthYear) { //denne birthyear har ikke noe å gjøre med birthyear i den andre funksjonen
    return 2037 - birthYear;
}
const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;
    // siden Mike er allerede pensjonert lager vi en if for at noe annet skal vises
    if (retirement > 0) {
        //return må være på bunn i if og else
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired`);
        return -1;
    }
}
console.log(yearsUntilRetirement(1991, 'jonas,'));
console.log(yearsUntilRetirement(1950, 'Mike,')); // - 2 resultat

*/

//-----------CODING CHALLENGE 1------
/*
'use strict';

//arrow function, (a, b, c) er verdien i funksjonen, => dette sier hva som skal skje med verdien
const calcAverage = (a, b, c) => (a + b + c) / 3; // regner gjennomsnitt
console.log(calcAverage(3, 4, 5));
//spesifiserer verdien til a b og c og legger det i en egen variabel(const) 
const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);


const checkWinner = function (avgDolphins, avgKoalas) {
    // >= 2 * betyr avgdolphins  er større eller samme som 2 gange avgkoalas
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    }
    else {
        console.log('noone win'); 
    }
    // >= is at least
}
checkWinner(scoreDolphins, scoreKoalas); //henter det som ble regnet ut i const scoredolphins

//hvis man har lyst på andre tall senere, ikke lag ny const, men endre det som allerede er der.
//skriv slik:
//scoreDolphins = calcaverage(85, 54, 71);

*/
// Funksjon forklaring: (ny notat)

// checkwinner er navn på funksjon, det i parantes er dermed det som skal regnes i funksjonen
// koden under er det som gjør at funksjonen kjøres/ kaller funksjonen
// eks: checkWinner(scoreDolphins, scoreKoalas);

// vi kan se hvordan det første i parantesen, scoredolphins, er regnet ut
// før tallene er oppført så lenkes det til en annen  funksjon kalt calcaverage
// const scoredolphins = calcaverage(44,23,71);
// verdien regnes ut her:
//const calcAverage = (a, b, c) => (a + b + c) / 3; 

// så verdien scoredolphins tar med seg videre er ferdig utregnet når dette er skrevet
// const scoredolphins = calcaverage(44,23,71);

// dette tas med i hovedfunksjonen
// const checkWinner = function (avgDolphins, avgKoalas) { 
//    }
// men her får det et annet navn, (avgDolphins, avgKoalas) inneholdewr samme verdi




//test 2
/*
const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);
const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    }
    else {
        console.log('noone win');
    }
    // >= is at least
}
checkWinner(scoreDolphins, scoreKoalas); //henter det som ble regnet ut i const scoredolphins
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);  //gammelt og nytt resultat vil dukke opp i console pga let som kan endre verdi
*/



//-------------ARRAYS-----------------
/*
'strict';
// nummer           0,         1,        2,
const friends = ['michael', 'steven', 'peter'];

//annen metode
const y = new Array(1991, 1984, 2008, 2020);

console.log(friends);
console.log(friends[0]); // = michael (første)
console.log(friends.length); //antall elementer i array
console.log(friends[friends.length - 1]);  // viser siste i arrayen

//kan endre const når det er en array
friends[2] = 'jay';
console.log(friends);
//nå vil det stå jay i stedet for peter


const firstName = 'jonas';
//kan skrive jonas for seg selv over eller skrive over og deretter hente det inn under med (firstname)
const jonas = [firstName, 'schmedtmann', 2037 - 1991, 'teacher', friends];

console.log(jonas);
console.log(jonas.length);

//exercise
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];

// må spesifisere hvilken verdi som  skal brukes i funksjonen fordi en array inneholder flere verdier 
const age1 = calcAge(years[0]);

const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

// man kan plassere function calls i en array fordi det inneholder et nummer
const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);


*/
//-------------BASIC ARRAY OPERATORS----------------
/*
'strict';
const friends = ['michael', 'steven', 'peter'];

//friends.push('Jay'); // push legger til en ekstra til en array (på slutten)
const newLength = friends.push('Jay');
console.log(friends);

console.log(newLength); // gir informasjon om  nytt antall elementer

friends.unshift('john'); // legger til ny på begynnelsen
console.log(friends);

friends.pop(); // fjerner siste
// friends.pop(); // fjerner enda en
const popped = friends.pop();
console.log(popped); //viser hvem som er fjernet
console.log(friends);

friends.shift(); // fjerner begynnelsen
console.log(friends);

console.log(friends.indexOf('steven'));// finne ut plasseringen
console.log(friends.indexOf('bob')); // et element som ikke er der blir -1
friends.push(23);
console.log(friends.includes('steven')); // sjekker om objektet er i listen = true
console.log(friends.includes('bob')); // bob er ikke der, så det blir false
console.log(friends.includes(23)); // string er med '' men nummer er uten
if (friends.includes('peter')) {
    console.log('you have a friend called steven');
} else {
    console.log('peter is not in the list');
}

*/


//------CODING CHALLENGE------




// const bill = 430;
// const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
// console.log(`the bill was ${bill}, the tip was ${tip}, and total value was ${bill + tip} `);

//arrow function
//const calTip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0, 2;

//function
/*
const calcTip = function (bills) {
    return bills >= 50 && bills <= 300 ? bills * 0.15 : bills * 0.2;
    //hvis bills er høyere eller samme som 50 og samtidig er bills samme eller lavere enn 300 ? da skal bills ganges med 0.15(prosentregning) : hvis ikke skal bills ganges med 0.2
}
const bills = [125, 555, 44];
const tips = [calcTip(bills[0])]; // regner ut første i array
console.log(tips);



const calcTip = function (bills) {
    return bills >= 50 && bills <= 300 ? bills * 0.15 : bills * 0.2;
    //hvis bills er høyere eller samme som 50 og samtidig er bills samme eller lavere enn 300 ? da skal bills ganges med 0.15(prosentregning) : hvis ikke skal bills ganges med 0.2
}
const bills = [125, 555, 44];
//ny array med resultatet
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

//regner sammen tips og regning
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, totals);

/*

const calcTip = function (bills) {
    return bills >= 50 && bills <= 300 ? bills * 0.15 : bills * 0.2;
}

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]; //knytter funksjon og verdi sammen
console.log(bills, tips);

*/




//-------OBJECTS--------



/*
'strict';
//array eksempel fra tidligere
const jonasArray = [
    'jonas',
    'schmedtmann',
    2037-1991,
    ['michael', 'peter', 'steven']
];
//objekter. forskjellige metoder men {} er vanlig
const jonas = {
    firstName: 'jonas', // property firstname, med verdien jonas
    age: 2037-1991,
    job: 'teacher',
    friends: ['michael', 'peter', 'steven']
};

*/



// ----- DOTS VS BRACKET

//man bruker dot notation hvis det kun er en verdi, men hvis det er en array så må man bruke brackets

/*
//---rekkefølger ble alfabetisk i console
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

//hvis noe har et felles ord i seg nå kan man spesifisere å bare vise det
//for eksempel name. 
// namekey refererer du til i koden, 'name' er det faktiske ordet den leter etter i listen
const nameKey = 'Name';
//denne fungerer ikke med dot metode. dot er den endelige objektet or ikke en av flere i en array 
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


// legge til en ekstra property til objektet
//jonas refererer til objektet, location er den nye propertien på lik linje som job for eksempel
//dot metode .
jonas.location = 'portugal';
//bracket metode []
jonas['twitter'] = '@jonasschmedtman';
// nå er disse lagt til i listen i console som vi skrev tidligere
// blir ikke lagt i promt fordi den er etter prompt i koden 

//----challenge

//"jonas has 3 friends and his best friend is called michael"
//skrive setningen i kode
// ${jonas.friends.length} viser hvor mange  det er i en array
console.log(`${jonas.firstName} has ${jonas.friends.length} friends and his best friend is called ${jonas.friends[0]}`);

*/


//------OBJECT METHODS----------
//--this--


'strict';

const jonas = {
    firstName: 'jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher', // string value
    friends: ['michael', 'peter', 'steven'], //array value. array er en annen type objekt
    hasDriversLicence: true, //boolean value


// function inni objekt(heter a method) bruker : og har ikke egen const, men ellers er funksjon det samme.  utenfor objekt blir det const calcAge = (birthyear)
    
     calcAge: function(birthYear) { 
         return 2037 - birthYear;
     }

};

// dot
console.log(jonas.calcAge(1991));
//brackets
console.log(jonas['calcAge'](1991));


// ----This---- 
//annen versjon, bedre, automatisk henter alder


const jonas2 = {
    firstName: 'jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher', // string value
    friends: ['michael', 'peter', 'steven'], //array value. array er en annen type objekt
    hasDriversLicence: true, //boolean value

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


//bedre metode for å unngå å repetere seg selv
//dot uten spesifisert år
console.log(jonas2.calcAge()); // svar er 46, alderen i 2037
//bracket, trenger å være string ''
// console.log(jonas['calcAge'](1991)); //prøv å unngå repetisjon, derfor gjør det slik
console.log(jonas2.calcAge());
// når kalkuleringen er gjort og man trenger å vise resultatet flere ganger så kan man i stedet 
// kan lagre svaret slik at den ikke må gjøre funksjonen om og om igjen

console.log(jonas2.age); // mye bedre, effektiv




//------challenge------

/*
// "jonas is a 46 year old teacher, and he has a drivers licence" (a or no)
// skisse. den fungerte, men kursholder ønsket noe annet
if (jonas.hasDriversLicence) {
    console.log(`${jonas.firstName} is a ${jonas.age} year old ${jonas.job}, and has a drivers licence `)
} else {
    console.log(`${jonas.firstName} is a ${jonas.age} year old ${jonas.job}, and does not have a drivers licence `)
}

console.log(jonas.getSummary());



//-----CODING CHALLENGE 3--------

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
/*


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
}*/