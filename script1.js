// ----- NEW FILE JAVASCRIPT UDEMY----
'strict';
/*
UDEMY FROM ZERO TO EXPERT JAVASCRIPT, FUNDAMENTALS DEL 1

MENY:                                           
KAPITTEL:                                       KODE:
//------LINKING A JAVASCRIPT FILE------------------16
//------VALUES AND VARIABLES-----------------------27
//------DATA TYPES---------------------------------60
//13----LET, CONST, VAR --------------------------104
//14----BASIC OPERATORS---------------------------128
//15----OPERATOR PERCEDENCE-----------------------166
//16----Challenge 1-------------------------------177
//17----STRINGS AND TEMPLATE LITERALS-------------220
//18----TAKING DECISIONS  IF/ ELSE STATEMENTS ----245
//19 ---Coding challenge -------------------------286
//20----TYPE CONVERSION AND type COERCION---------336
//21----TRUTHY AND FALSE VALUES ------------------392
//22--- EQUALITY OPERATORS == VS. ===  og !== ----432
//23----BOOLEAN LOGIC-----------------------------475
//24 ---LOGICAL OPERATORS-------------------------517
//25 ---CODING CHALLENGE 3------------------------591
//26----THE SWITCH STATEMENT----------------------670
//27----STATEMENTS AND EXPRESSIONS----------------730
//28----THE CONDITIONAL (TERNARY) OPERATOR--------745
//29----challenge 4-------------------------------775





*/
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



//13------LET, CONST, VAR -----

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


// 16------Challenge 1------

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


const markMass = 78;
const markHeight = 1.69;

const johnMass = 92;
const johnHeight = 1.95;

const markBMI = markMass / markHeight **2;
const johnBMI = johnMass / johnHeight **2;

const markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);



//17-------STRINGS AND TEMPLATE LITERALS---------

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



// 18----TAKING DECISIONS  IF/ ELSE STATEMENTS ----


const age = 16;

const isOldEnough = age >= 18;

//hvis det under er true så kjøres koden
if (isOldEnough) {
    console.log(`${isOldEnough}, er gammel nok, alder er ${age}`);
}
else {
    console.log(isOldEnough);
}




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


//19 ------Coding challenge ------------


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

//-------forsøk 2--------
/*
const markMass = 78;
const markHeight = 1.69;

const johnMass = 92;
const johnHeight = 1.95;

const markBMI = (markMass / markHeight **2);
const johnBMI = (johnMass / johnHeight **2);

if (markBMI > johnBMI){
    console.log(`marks bmi ${markBMI} is higher than johns bmi ${johnBMI}`);
}
else {
    console.log(`marks bmi ${markBMI} is lower than johns bmi ${johnBMI}`);
}

*/



// 20----TYPE CONVERSION AND type COERCION----
/*
// ---type conversion
// type conversion endrer manuelt, men type coercion endrer automatisk
const inputYear = '1991';
console.log(inputYear + 18);


// resultatet her bli 199118, som er feil. se løsning under
//convertion
//konverterer string til nummer
const inputYear = '1991';
console.log(Number(inputYear), inputYear); //console(viser etter og så før): 1991 "1991"
// her blir 1991 gjort om til et nummer som gjør at man kan plusse det med 18
console.log(Number(inputYear) + 18);


// jonas er ikke et nummer så console blir NaN(not a number)
console.log(Number('Jonas'));
console.log(typeof NaN);

//her blir number convertert til string
console.log(String(23), 23);



//----type coerccion
//mange liker ikke dette hvis man ikke har oversikt på hvordan det fungerer
//          string  number     string
// konverterer automatisk nummer til en string
console.log('I am ' + 23 + ' years old')

// Noen programmer er ikke automatisk og krever at man gjøre dette:
console.log('I am ' + String(23) + ' years old')


//nedenfor konverterte til number, regner ut og svaret kommer i console
console.log('23' - '10' - 3); // = 10

//med + så blir det gjort om til string
console.log('23' + '10' + 3); // = 231003

//blir gjort om til number
console.log('23' * '2'); // = 46

//eksempel
let n = '1' + 1; // = 11
n = n - 1;   // - 1
console.log(n);  // = 10

//eksempelconsole: 2+3+4+'5' Dette blir lagt sammen først 2+3+4 = 9, så legger den til 5 etterpå(firdi det er en string) som blir 95 (konvertert resultat til string)
//eksempelconsole2: '10'-'4'-'3'- 2 +'5' = 15 (addere, så minus 2 og så legge på 5)




//21-----TRUTHY AND FALSE VALUES ------

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



//22------- EQUALITY OPERATORS == VS. ===  og !== --------

const age = 18;
if (age === 18) console.log('You just became a adult')
// === hvis age er presist 18, så slår den ut
// == kan gjøre en coersjon, en string '18' kan gjøres om til number 18
//eks: '18' == 18 = true (loose) (unngå denne så mye som mulig for å unngå bugs)
// eks: '18' === 18 = false (strict)

// lage prompt(promt lager pop up)
Number(prompt("What's your favorite number");

//lagre verdien et sted
//number fordi det du skriver i prompt skal være et nummer og ikke en string
const favourite = Number(prompt("What's your favorite number"));


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


// --- different operator
// hvis valget ditt ikke er det spesifike under så kommer denne mld opp også

if (favourite !== 23) console.log('why not 23');


*/
/*

//23-------BOOLEAN LOGIC-------

//true table (brukes som referanse)


//1 AND operator = &&
// true when all are true

                A
        AND  | TRUE | FALSE
    B   TRUE | true   false
        FALSE| false  false

//2 OR operator = ||
// true when one is true

                A
        AND  | TRUE | FALSE
    B   TRUE | true   true
        FALSE| true   false
// 3
 inverts thew value to the opposite
 
 
// eksempel
age = 16

A: age is greater or equal 20 = false
B: age is less than 30 = true

!A (som er false) = true
A and B (false, true) = false (følger AND table)
A or B (false, true) = true
!A and B (true, true )= true
A or !B (false, true(konverteres til det motsatte=false)) = false

// flere eksempler under, hvordan det tas i bruk




//24 ---LOGICAL OPERATORS-----


// AND: &&
// true + true = false. True + false = false. true and true and false = false
// OR: ||
// true + false = true
// !: betyr motsatt, en negativ
//
//&& eksempel 1
const hasDriversLicence = true; // a
const hasGoodVision = true; // B

console.log(hasDriversLicence && hasGoodVision); = true

// && eksempel 2
const hasDriversLicence = true; // a
const hasGoodVision = false; // B

console.log(hasDriversLicence && hasGoodVision); = false

// || eksempel
const hasDriversLicence = true; // a
const hasGoodVision = false; // B

console.log(hasDriversLicence || hasGoodVision); = true


// ! operator eksempel
const hasDriversLicence = true; // a
const hasGoodVision = false; // B

console.log(!hasDriversLicence); = false(fordi hun har førerkort)


// Kan skrive const slik som under men er vanlig å putte det direkte inn i if ()

// eksempel utenfor
const hasDriversLicence = true; // a
const hasGoodVision = false; // B 

const shouldDrive = hasDriversLicence && hasGoodVision;

if (shouldDrive) {
    console.log('Sarah is able to drive');
} else {
    console.log('Someone else should drive');
}


// eksempel inni
const hasDriversLicence = true; // a
const hasGoodVision = false; // B

if (hasDriversLicence && hasGoodVision) {
    console.log('Saharh is able to drive');
} else {
    console.log('Someone else should drive');
}

// en ny variabel
const hasDriversLicence = true; // a
const hasGoodVision = false; // B
const isTired = false; //C

if (hasDriversLicence && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive');
} else {
    console.log('Someone else should drive');
}
*/

//25 ------CODING CHALLENGE 3-----
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
//-------andre forsøk-----
/*
1. regne ut gjennomsnitt av lagene
2. sammenligne resultatene for å kåre en vinner. putt i console. husk å legge ved uavgjort
3. inkluder en minimum score på 100. et team vinner bare hvis score er høyere enn det andre laget
og har høyere enn 100. hint: bruk en logical operator for å teste mimimun score 
og bruk flere else if blocks
4. minimum score er også uavgjort

dolphins: 96 108 89
koalas: 88 91 110

løsning:
*/
/*
const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 100 + 110) / 3;
console.log(scoreDolphins, scoreKoalas);

//1

if (scoreDolphins > scoreKoalas){
    console.log(`Dophins win with ${scoreDolphins}`);
} else if (scoreKoalas > scoreDolphins){
    console.log(`koalas win with ${scoreKoalas}`);
} else if (scoreDolphins === scoreKoalas) {
    console.log('uavgjort');
} 

//2
if (scoreDolphins > scoreKoalas && scoreDolphins >= 100){
    console.log(`Dophins win with ${scoreDolphins}`);
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100){
    console.log(`koalas win with ${scoreKoalas}`);
} else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
    console.log('uavgjort');
} else {
    console.log('nobody wins');
}

*/


//26-----THE SWITCH STATEMENT-----
/*

// 

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
    default:                        // hvis ingenting matcher (day) så slår denne ut
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

// (statement)
if (23 > 10) {
    const str = '23 is bigger';
}


const me = 'jonas';

//                 (expression)=lager en verdi              (expression)
console.log(`I'm       ${2037 - 1991}            years old     ${me}`)




//----THE CONDITIONAL (TERNARY) OPERATOR----

//en annen måte å lage if og else. ikke mye brukt

const age = 23;
// hvis age er det samme eller høyere enn 18 blir console utløst, hvis ikke (:) så blir neste utløst
age >= 18 ? console.log('I like to drink wine') : console.log('I like to drink water');


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



//------andre forsøk----------

const bill = 275;

const tip = bill >= 50 && bill <= 300 ? bill * 0.15 :  bill *0.2;

// hvis bill er (dette) samtidig som (dette), slår (dette) ut, ellers slår (dette) ut
//const tip = bill >= 50    && bill <= 300 ?      bill * 0.15      :       bill *0.2;

console.log(tip);
console.log(bill + tip);


//30------javascript releases


//------JAVASCRPIT FUNDAMENTALS - PART 2----
//------ACTIVATING STRICT MODE------
*/