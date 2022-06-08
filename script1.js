// ----- NEW FILE JAVASCRIPT UDEMY----
'strict';

//----LINKING A JAVASCRIPT FILE-----

// html script notat:  
/*<body>
    <script src="NewScript.js"></script>
  </body>

*/

/*

//----VALUES AND VARIABLES----

let js = 'amazing';

console.log(40 + 8 + 23 - 10);


console.log("jonas");
console.log(23);

//let firstname er en variabel, mathilda er verdien
let firstName = "Mathilda";


console.log(firstName);
console.log(firstName);
console.log(firstName);
//variable name conventions

let jonas_mathilda = "JM";
let $function = 27;

let person = 'jonas';
let PI = 3.1415;

let myFirstJob = 'Coder';
let myCurrentJob = 'Teacher';

console.log(myFirstJob);




//-------DATA TYPES-----

// 7 primitive data types:

// 1: Number, 
// 2: string, 
// 3: Boolean (true or false), 
// 4: Undefined (variable not yet defined)
// 5: Null (also means emphty value)
// 6: Symbol(introdusert i ES2015) unik verdi som ikke kan endre seg
// 7: BigInt (ES2020) Larger integers than the number type can hold



let javascriptIsFun = true;
//console må være etter variabel for å kunne kjøre
console.log(javascriptIsFun);

//se hva de under er i chrome console

//console.log(typeof true); // viser resultat av typeof i console(henter verdi fra javascriptisfun)
console.log(typeof javascriptIsFun);
//console.log(typeof 23);
//console.log(typeof 'jonas');


//-----dynamic typing
//endret boolean fra true til en string med ordet yes!
javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;

console.log(year);
console.log(typeof year);

// year får en verdi
year = 1991;
console.log(typeof year);

console.log(typeof null);



//------LET, CONST, VAR -----

let age = 30;
//gir en ny verdi senere i koden hvis det for eksempel skal skje noen endriner. term ofte brukt for dette er: mutate the variabel
age = 31;

//kan ikke endre en const. da kommer det opp en error. Fordi for eksempel birthyear vil aldri endre seg
const birthYear = 1991;
//birthYear = 1990;
//const trenger en verdi.
//burde bruke const med mindre du vet at det kommer en endring, da bruker man let
//betyr å definere variabel
//const job;


// var ligner på let men forskjellen kommer senere i kurset. ikke bruk var
var job = 'programmer';;
job = 'teacher';

//burde ikke skrive slik som under, burde declare en variabel, const
lastName = 'Schmedtmann';
console.log(lastName);


//14------BASIC OPERATORS----


// MATH OPERATORS
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

// komma mellom regnestykkene, regnes separat
console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 **3 means 2 to the power of 3 = 2*2*2

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
//for å lage space mellom navnene kan man lage en variabel midt i med kun mellomrom
console.log(firstName + ' ' + lastName);

// ASSIGNMENT OPERATORS
//kode for å gi en verdi til x
let x = 10 + 5; //15
x += 10; //x er lik x + 10. som blir 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1 = 101
x--; // = 100
x--; // = 99
console.log(x);

// cOMPARISON OPERATORS
// for å finne ut om jonas er eldre enn sarah
console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18); // er alderen hennes større enn 18
const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);



//15-----OPERATOR PERCEDENCE-----

//lenke til matte rekkefølge prioritering, hva kalkuleres først
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);


// ------Challenge 1------

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);
// kalkulere gjennomsnitt
const averageAge = (ageJonas + ageSarah) / 2
console.log(ageJonas, ageSarah, averageAge);
*/

/* const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;
//regnestykket for mark og john under er 2 forskjellige måter å løse samme regnestykke på
const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI);

----------2 forsøk------------




//-------STRINGS AND TEMPLATE LITERALS---------

const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' ' + 'years old ' + job + '!';
console.log(jonas);

// `` brukt til backwards string
// en annen måte å skrive inn samme tekst på (lettere med tanke på mellomrom)
const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log('just a regular string...');

console.log('string with \n\multible \n\lines');

console.log(`string
multible
lines`);



// ----TAKING DECISIONS  IF/ ELSE STATEMENTS ----

const age = 15;
const yearsLeft = 18 - age;

if (age >= 18) {

    console.log('Sarah can start  her driving licence 😍')
}
else {
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`)
}

const birthYear = 2012;
let century;

if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);


// ------Coding challenge ------------


const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

//const massMark = 95;
//const heightMark = 1.88;
//const massJohn = 85;
//const heightJohn = 1.76;
//regnestykket for mark og john under er 2 forskjellige måter å løse samme regnestykke på
const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's BMI (${BMIJohn})`)
}
else {
    // Må ha `` for å legge inn selve verdien ($ tingen)
    console.log(`John's BMI (${BMIJohn}}) is higher than Mark's BMI (${BMIMark})`)
}

*/

// ----TYPE CONVERSION AND COERCION----
/*
const inputYear = '1991';
console.log(inputYear + 18);


// resultatet her bli 199118, som er feil. se løsning under
//convertion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23);

//type coerccion
//          string  number     string
console.log('I am ' + 23 + ' years old')
// Noen programmer krever at man gjøre dette:
console.log('I am ' + String(23) + ' years old')
//nedenfor konverterte til number
console.log('23' - '10' - 3); // = 10

console.log('23' + '10' + 3); // = 231003
console.log('23' * '2'); // = 46

let n = '1' + 1; // = 11
n = n - 1;   // - 1
console.log(n);  // = 10

//eksempel: 2+3+4+'5' Dette blir lagt sammen først 2+3+4 = 9, så legger den til 5 etterpå som blir 95 (konvertert til string)
//eksempel2: '10'-'4'-'3'- 2 +'5' = 15 (addere, så minus 2 og så legge på 5)




//-----TRUTHY AND FALSE VALUES ------

//5 FALSY VALUES: 0, '', UNDEFINED, NULL, NaN

console.log(Boolean(0));    //false
console.log(Boolean(undefined));    //false (som i listen over)
console.log(Boolean('jonas'));      //true
console.log(Boolean({}));           //true

const money = 0;        // 0 er false, så else slår ut
if (money) {
    console.log("don't spend it all");
}
else {
    console.log('you should get a job');
}


const moneySecond = 100;
if (moneySecond) {
    console.log("don't spend it all"); //denne slår ut
}
else {
    console.log('you should get a job');
}

let height;   //siden den ikke har fått en verdi enda så blir den regnet som undefined, defor slår else ut
if (height) {
    console.log('YAAY');
}
else {
    console.log('nooo');
}




//------- EQUALITY OPERATORS == VS. ===   --------

const age = 18;
if (age === 18) console.log('You just became a adult')
// === betyr hvis age er presist 18, trenger ikke under if {}
// == betyr at den kan gjøre en coersjon, som betyr å endre fra string til number
//eks: '18' == 18 = true (loose) (unngå denne så mye som mulig for å unngå bugs)
// eks: '18' === 18 = false (strict)



const favourite = Number(prompt("What's your favorite number"));
//må ha number for at det ikke skal være en string
// promt lager pop up

console.log(favourite); //svaret du legger i promt havner i console
console.log(typeof favourite); // typeof = for å få svar på hva er dette for noe? string? number?

if (favourite === 23) {
    console.log('Cool! 23 is an amazing number') //hvis svaret er 23 kommer dette opp
}
else if (favourite === 7) {
    console.log('7 is also good');
}
else if (favourite === 5) {
    console.log('5 is eehh');
}
else {
    console.log('number is not 23 or 7')
}
// hvis valget ditt ikke er det spesifike under så kommer denne mld opp også
if (favourite !== 23) console.log('why not 23');

*/
/*

//-------BOOLEAN LOGIC-------

// ---LOGICAL OPERATORS-----

// AND: &&
// true + true = false. True + false = false. true and true and false = false
// OR: ||
// true + false = true
// !: betyr motsatt, en negativ
//
const hasDriversLicence = true; // a
const hasGoodVision = true; // B

console.log(hasDriversLicence && hasGoodVision);
console.log(hasDriversLicence || hasGoodVision);
console.log(!hasDriversLicence);

// Kan skrivr const slik som under men er vanlig å putte det direkte inn i if ()
// const shouldDrive = hasDriversLicence && hasGoodVision;

/*
if (hasDriversLicence && hasGoodVision) {
    console.log('Saharh is able to drive');
} else {
    console.log('Someone else should drive');
}
*/
/*
const isTired = false; //C
console.log(hasDriversLicence && hasGoodVision && !isTired);

if (hasDriversLicence && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive');
} else {
    console.log('Someone else should drive');
}
*/

// ------CODING CHALLENGE 3-----
/*
const averageScoreDolphins = (96 + 108 + 89) / 3;
const averageScoreKoalas = (88 + 100 + 110) / 3;

console.log(averageScoreDolphins, averageScoreKoalas);

if (averageScoreDolphins > averageScoreKoalas) {
    console.log('Dolphins has a higher average');
} else if (averageScoreDolphins < averageScoreKoalas) {
    console.log('Koalas has a higher score');
}
else if (averageScoreDolphins === averageScoreKoalas) {
    console.log('The average is the same');
}
*/
/*
// bonus 1
const averageScoreDolphins = (97 + 112 + 80) / 3;
const averageScoreKoalas = (109 + 95 + 50) / 3;

console.log(averageScoreDolphins, averageScoreKoalas);

if (averageScoreDolphins > averageScoreKoalas && averageScoreDolphins >= 100) {
    console.log('Dolphins has a higher average');
} else if (averageScoreDolphins < averageScoreKoalas && averageScoreKoalas >= 100) {
    console.log('Koalas has a higher score');
}
else if (averageScoreDolphins === averageScoreKoalas && averageScoreDolphins >= 100 && averageScoreKoalas >= 100) {
    console.log('The average is the same');
} else {
    console.log('nobody wins');
}
*/


//-----THE SWITCH STATEMENT-----
/*
const day = 'thursday';

switch (day) {
    case 'monday':  // day === 'monday'
        console.log('Plan my course structure');
        console.log('Go to coding meetup');
        break;
    case 'thuesday':
        console.log('prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('write code examples');
        break
    case 'friday':
        console.log('record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('enjoy the weekend');
        break;
    default:
        console.log('not a valid day');
}

const day = 'wednesday';

if (day === 'monday') {
    console.log('første');
}
else if (day === 'thuesday') {
    console.log('andre');
}
else if (day === 'wednesday' || day === 'thursday') {
    console.log('tredje, fjerde');
}

else if (day === 'friday') {
    console.log('femte');
}
else if (day === 'saturday') {
    console.log('sjette');
}
else if (day === 'sunday') {
    console.log('syvende');
}
else {
    console.log('ingen av dagene');
}




//----STATEMENTS AND EXPRESSIONS----


if (23 > 10) {
    const str = '23 is bigger';
}
const me = 'jonas';
console.log(`I'm ${2037 - 1991} years old ${me}`)




//----THE CONDITIONAL (TENARY) OPERATOR----

//en annen måte å lage if og else. ikke mye brukt
const age = 23;
// age >= 18 ? console.log('I like to drink wine') :
//     console.log('I like to drink water');

// enda en metode (best fordi oppgaven er kort og enkel)
// større blokker med kode trenger if else
const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);

//annen metode med if og else
let drink2;
if (age >= 18) {
    drink2 = 'wine';
} else {
    drink2 = 'water';
}
console.log(drink2);

// annen metode
console.log(`i like to drink ${age >= 18 ? 'wine' : 'water'}`)

*/



//------challenge 4------


/* // DET UNDER ER SKISSE
const price = 350;

console.log(`the tip is ${price >= 50 && > 300 ? '15 percent' : '20 percent'}`)


const price = price >= 50! > 300 ? '15 prosent' : '20 prosent';
console.log(price);


switch (price) {
    case (`${50 <= !> 300}`):
        console.log('tip is 15%');
        break;
}
console.log(price);
 //  Skisse ferdig


// under så blir : brukt som (hvis resultatet ikke er det andre)
const bill = 430;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(`the bill was ${bill}, the tip was ${tip}, and total value was ${bill + tip} `);

*/



//------JAVASCRPIT FUNDAMENTALS - PART 2----
//------ACTIVATING STRICT MODE------
