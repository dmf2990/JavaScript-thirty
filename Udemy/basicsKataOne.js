// //vars & data types

// // console.log('drew');

// let firstName = 'Drew'
// let lastName = 'Franklin';
// console.log(lastName);

// let age = 28;

// let fullAge = true; 

// console.log(fullAge);

// //undefined var
// let job;
// console.log(job); 

// //later defined
// job = 'Teacher';
// console.log(job);

//********************************************/
//variable mutation and type coercion

// let firstNamee = 'Dale';
// let age = 34;

// //concat
// console.log(firstNamee + ' ' + age);

// //declare multiple variables at once
// var job, isMarried;  
// job = 'teacher';
// isMarried = false;

// console.log(firstNamee + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

//age = 'it knows that this is a new var and its a string'; 

//alert('yes'); 

//********************************************/
//********************************************/

//let UserInputName = prompt('question to ask user to answer?')

//this assigns whatever they type to userInputName variable

//console.log(UserInputName);

//try


//math
//*********************/

var year, yearDrew, yearKate;
now = 2019;
ageDrew = 29;
ageKate = 27;

now = 2019;
yearDrew = now - ageDrew;
yearKate = now - ageKate;

console.log(yearKate);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

//logical operators

let drewOlder = ageDrew > ageKate;
console.log(drewOlder);

// tyeOf operator

console.log(typeof drewOlder)


// Kata 1 ***************************************
//***********************************************
/* 
mark and john are trying to compare their BMI
BMI = mass / height^2 
mass must be in kg and height in meters

1. Store heights in variables
2. Calc both bmi
3. Create boolean vars containing information about whether
mark has a higher bmi than john
4. print a string to console containing the var
from step 3. ("is mark's bmi higher than johns? t or f")
*/

//create a variable for marks and johns mass and height
let markMass = 80;
let johnMass = 75;

let markHt = 2;
let johnHt = 1.75;

//calc bmi
let bmiMark = markMass / (markHt * markHt);
let bmiJohn = johnMass / (johnHt * johnHt);

let markHigherBMI = bmiMark > bmiJohn;

if (markHigherBMI = true) {
    console.log('Mark')
} else {
    console.log('John')
}








