/*//-----Fundamentals part 2 ---

// ----strict----
// må ha strict kode øverst for at det skal bli aktivert

'use strict';
// let kan endres
// const er konstant (bruk dette )

let hasDriversLicence = false;
const passTest = true;

if (passTest) hasDriversLicence = true;
// hvis man skriver feil så kommer det opp mld i console pga use strict, ellers er det ikke alltid det vises
if (hasDriversLicence) console.log('I can drive');

//under ser man forslag på ord som kan skape error fordi det kan bli brukt til noe annet i fremtiden (interface, private osv) ordene er reservert
//const interface = 'audio';
//const private = 534;
// const if = 23;
*/

//------------  FUNCTIONS -----------------
/*
'use strict';

//til bruk flere gangwe
function logger() {
    console.log('My name is Jonas');
}
//eks:
// calling /running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `juice ${apples} apples and ${oranges} and oranges.`;
    return juice;
    // return betyr at den skal hete verdiene som står oppført lenge nede i koden, dermed blir () byttet ut med tall istedet
}
// tallene er det som kommer opp i console
//fruitProcessor(5, 0);
//bruk av en slik function gjør det ryddigere i koden
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
// annen metode     console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

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

//function expression (fungerer på samme måte som decleration) men skrives på forskjellig måte avhengig av behov. det kommer senere kurset. forskjellen er første linje
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

//Arrow function
//komprimert enda mer. 
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

// annet eksempel. trenger {} under fordi mer kode skal inn
const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // må legge til return slik når det er flere ting 
    // return retirement;
    return `${firstName} retires in ${retirement} years`;
}
console.log(yearsUntilRetirement(1991, 'Jonas'));
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
//'use strict';
/*
const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));

const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);
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
*/
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

const friends = ['michael', 'steven', 'peter'];

const y = new Array(1991, 1984, 2008, 2020);
console.log(friends);
console.log(friends[0]); // = michael (første)


console.log(friends.length); //antall elementer i array
console.log(friends[friends.length - 1]);  // viser siste

//kan endre const når det er en array
friends[2] = 'jay';
console.log(friends);
//nå vil det stå jay i stedet for peter

const firstName = 'jonas';
const jonas = [firstName, 'schmedtmann', 2037 - 1991, 'teacher', friends];
console.log(jonas);
console.log(jonas.length);

//exercise
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);

*/


//-------------BASIC ARRAY OPERATORS----------------
/*
'strict';

const friends = ['michael', 'steven', 'peter'];
//friends.push('Jay'); // push legger til en ekstra på slutten
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

'strict';


// const bill = 430;
// const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
// console.log(`the bill was ${bill}, the tip was ${tip}, and total value was ${bill + tip} `);

//arrow function
//const calTip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0, 2;

//function
/*
const calcTip = function (bills) {
    return bills >= 50 && bills <= 300 ? bills * 0.15 : bills * 0, 2;
}
const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

console.log(bills, tips);
*/

const calcTip = function (bills) {
    return bills >= 50 && bills <= 300 ? bills * 0.15 : bills * 0.2;
}

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]; //knytter funksjon og verdi sammen
console.log(bills, tips);
