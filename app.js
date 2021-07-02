/******************** 
this session is about variables
and data types
*/
// the below js code prints out the message on the browser's developer console

console.log('Hello Python developer,Welcome to JavaScript !!!');

// EcmaScript5(ES5)
// declared a variable firstName using var keyword and print it out on the console
var firstName = "Wycliffe";
console.log(firstName);

// declared a variable secondName using var keyword and print it out on the console
var secondName = "Muchumi";
console.log(secondName);

// declared a variable age using var keyword and print it out on the console
var age = 26;
console.log(age);

// declared a variable fullAge using var keyword and print it out on the console
var fullAge = true;
console.log(fullAge)

var job = "Software Engineer";
console.log(job);

/******************************************************************************
this session is about variable mutation
and type coercion
*/
var firstName = "Wycliffe";
var age = 26;

// type coercion is a process of converting values' data type to another data type
console.log(firstName + ' ' + age);

var job, isMarried;
job = "Software Engineer";
isMarried = false;
console.log(firstName + ' a ' + job + ' is ' + age + ' years old','.Is he married?' + isMarried);

// variable mutation
age = 'twenty six';
job = 'driver';
alert(firstName + ' a ' + job + ' is ' + age + ' years old' + '. Is he married?' + isMarried);

var lastName = prompt('What is his last name?');
console.log(firstName + ' ' + lastName);

/***********************************
 * Basic Operators
 */

// math operators
var currentYear, mainaAge, miriamAge, wairimuAge;
currentYear = 2020;
mainaAge = 26;
miriamAge = 21;
wairimuAge = 23;

mainaDOB = currentYear - mainaAge;
console.log(mainaDOB);
miriamDOB = currentYear - miriamAge;
console.log(miriamDOB);
wairimuDOB = currentYear - wairimuAge;
console.log(wairimuDOB);

// logical operators
var ageOlder = mainaAge > miriamAge;
console.log(ageOlder);

//javaScript typeof operator

console.log(typeof ageOlder);
console.log(typeof miriamAge);
console.log(typeof wairimuAge);
console.log(typeof 'Maina is older than Miriam');

var x;
console.log(typeof x);

// operator precedence(means which operator is executed first)
// multiple operators

var currentYear = 2020;
var mainaDOB = 1994;
var fullAge = 18;
var isfullAge = currentYear - mainaDOB >= fullAge; //true
console.log(isfullAge);
console.log(typeof isfullAge);

//Grouping(()), always highest precedence than other operators

var mainaAge = currentYear - mainaDOB;
var miriamAge = currentYear - miriamDOB;
var ageAverage = (mainaAge + miriamAge) / 2;
console.log(ageAverage);

// multiple assignments

var x , y;
x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 || 32 - 6 || 26
console.log(x, y);

// more operators
x = x * 2; // same as :
// x *= 2;
console.log(x);


/**************************
 * if else statements
 */
var firstName = "John";
var civilStatus = "single";

if(civilStatus === 'married') {
    console.log(firstName + ' is married');
} else {
    console.log(firstName + ' is single')
}
// using a boolean variable
var isMarried = "true";
if (isMarried){
    console.log(firstName + ' is married');
} else {
    console.log(firstName + ' is not married');
}

// BMI Calculator
markMass = 78;
markHeight = 1.69;

johnMass = 92;
johnHeight = 1.95;

markBMI = markMass / (markHeight*markHeight);
johnBMI = johnMass / (johnHeight*johnHeight);


if(markBMI > johnBMI) {
    console.log('Mark\'s BMI is greater than John\'s');
} else {
    console.log('John\'s BMI is greater than Mark\'s');
}

/*******************************
 * Boolean Logic
 */

var firstName, age;
firstName = "John";
age = 16;

if(age < 13) {
    console.log(firstName + ' is a kid');
} else if (age >=13 && age < 20){ 
    console.log(firstName + ' is a teenager');
} else if(age >= 20 && age < 30 ) {
    console.log(firstName + ' is a young man');
} else {
    console.log(firstName + ' is an adult');
}

/*************************************
 * The Ternary operator(or conditional operator) and switch statements
 * is called Ternary because it has three operands
 */

var firstName, age;

firstName = "John";
age = 15;
age >= 18 ? console.log(firstName + ' is allowed to drink a bottle of beer')
: console.log(firstName + ' is only allowed to drink juice');

// assigning values to variables using the ternary operator
var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

// using an if else statement
if(age>=18){
    var drink = 'beer';
}else{
    var drink = 'juice';
}

// switch statements
// you can use switch statements to clean up if else block statements
var firstName = "John";
var job = "Software Engineer";

switch(job){
    case 'Software Engineer':
        console.log(firstName + ' develops scalable software products');
        break;
    case 'Governor':
        console.log(firstName + ' runs the daily operations of a county government');
        break;
    case 'Designer':
        console.log(firstName + ' designs beautiful websites');
        break;
    default:
        console.log(firstName + 'does something else');       
}

// implementing the if else statement using a switch statement
// evaluate true to make the switch statement work like an if else statement with ranges
age = 35;
switch(true){
    case age < 13:
        console.log(firstName +' is a kid');
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager');
        break;
    case age >= 20 && age < 30:
        console.log(firstName + ' is a young man');
        break;
    default:
        console.log(firstName + ' is an adult');   
}

/***********************************************
 * Falsy and truthy values and equality operators
 */

// In JS, a Falsy value is a value considered false when evaluated in a if else condition statement
// Falsy values in JS include zero, undefined, null, empty string, NaN
// In JS, a Truthy value is a value considered true when evaluated in a if else condition statement

// when variable is undefined
var height;

if (height) {
    console.log('variable is defined');
} else {
    console.log('variable has NOT been defined');
}

// when variable is zero
var height = 0;

if (height) {
    console.log('variable is defined');
} else {
    console.log('variable has NOT been defined');
}

// using || operator(OR) to evaluate a variable as defined despite been assigned zero as its actual value  
// common pattern to evaluate is a variable is defined or not

// Example one:
var height = 0;

if(height || height === 0) {
    console.log('variable is defined');
} else {
    console.log('variable has NOT been defined');
}

// Example two
var height = '';
if (height || height === 0) {
    console.log('variable is defined');
} else {
    console.log('variable has NOT been defined');
}

// Equality operators
var height = 23;

if (height=='23'){
    console.log('The == operator does type coercion!');
}

/**************************************************
 * Functions in JavaScript
 */
// Functions are like containers that hold some lines of code and we can pass arguments in them to return results

function calculateAge(birthYear){
    return 2020 - birthYear;
}
// the results returned by the calculateAge function are stored in a variable called  Age then printed on the console
var Age = calculateAge(1994);
console.log('Your age is ' + Age);

// functions can call other functions
function remainingYearsToRetirement(birthYear, firstName){
    var age = calculateAge(birthYear);
    var retirementYears = 65 - age;
    if (retirementYears > 0) {
        console.log(firstName + ' retires in ' + retirementYears + ' years');
    } else {
        console.log(firstName + ' is already retired');
    }
    
}

remainingYearsToRetirement(1994, 'Wycliffe');
remainingYearsToRetirement(1999, 'Miriam');
remainingYearsToRetirement(1998, 'Shaey');

/**********************************
 * Function statements and expressions
 */
// function declaration
function whatDoYouDo(job, firstName){

}
// function expression
// store function expression in a variable
var whatDoYouDo = function(job, firstName) {
    switch (job) {
        case 'instructor':
            // return statement returns results and finishes the function therefore no need for a break statement
            return firstName + ' teaches freshmen and newbies how to code.';
        case 'driver':
            return firstName + ' drives an uber in Nairobi.';
        case 'Software Engineer':
            return firstName + ' builds scalable and quality software products.';
        default:
            return firstName + ' does something else.';          
    }
}
console.log((whatDoYouDo('Software Engineer', 'Wycliffe')));
console.log((whatDoYouDo('instructor', 'Miriam')));
console.log((whatDoYouDo('driver', 'Moses')));
console.log((whatDoYouDo('beautician', 'Shaey')));

/* Differences between statements and expressions is that:
JavaScript Expressions always produce a single value e.g 2+3 which is 5.
JavaScript statements only perform actions i.e if else statements, for loops, while loops, etc.
In other words JavaScript statements don't produce immediate values.
*/

/******************************************************************
 * Arrays
 */
// Ways of declaring arrays in JavaScript
// Commonly used:
var names = ['John', 'Michael', 'Wycliffe'];

// Rarely used:
var birthYears = new Array(1989, 1966, 1994);

// Accessing elements in an array
// Indices in JavaScript Arrays start from zero
console.log(names[0]);

// Accessing all elements in names array
console.log(names);

// Getting total number of elements in names array using the length function
console.log(names.length);

// Changing elements of an array
names[2] = 'Anna';
console.log(names);

// Adding element to a position that does not exist in an array
names[names.length] = 'Maurice';
console.log(names);

// Different data types in one array
var Wycliffe = ['Wycliffe', 'Muchumi', 'Software Engineer', '26', 'false'];

// Array Methods
// push() method, adds a new element to our array
Wycliffe.push('blue');

// unshift() adds a new element at the beginning of the array
Wycliffe.unshift('Mr.');
console.log(Wycliffe);

// pop(), removes last element of an array
Wycliffe.pop()
console.log(Wycliffe);

// shift(), removes first element of an array
Wycliffe.shift()
console.log(Wycliffe);

// indexOf(), returns the position of the arguement passed
console.log(Wycliffe.indexOf('Muchumi'));

// used to check if a specififed element is present in an array
var isSoftwareEngineer = Wycliffe.indexOf('Software Engineer') === -1 ?
'Wycliffe is not a Software Engineer' : 'Wycliffe is a Software Engineer';
console.log(isSoftwareEngineer);

/********************************************
 * Objects and Properties
 */
// Object Literal
var person = {
    firstName: 'Wycliffe',
    lastName: 'Muchumi',
    age: 26,
    occupation: 'Software Engineer',
    birthYear: 1994,
    family: ['Joyce', 'Abby', 'Miriam']
};
console.log(person);

// Accessing person object properties
console.log(person.firstName);
console.log(person.lastName);
console.log(person.family);

// Accessing person object properties using brackets
console.log(person['firstName']);
console.log(person['lastName']);
console.log(person['family']);

// Using . notation to mutate object property
person.lastName = 'Maina';
console.log(person);

// Using [] brackets to mutate object property
person['lastName'] = 'Muchumi';
console.log(person);

// Second method of declaring a new object
// new Object syntax
var person = new Object();
person.firstName = 'Wycliffe';
person.lastName = 'Muchumi';
person.age = 26;
person.occupation = 'Software Engineer';
console.log(person);

/********************************************
 * Objects and Methods
 */
// Using this to refer to person object
var person = {
    firstName: 'Wycliffe',
    lastName: 'Muchumi',
    occupation: 'Software Engineer',
    birthYear: 1994,
    family: ['Joyce', 'Abby', 'Miriam'],
    calcAge: function() {
        return 2020 - this.birthYear;
    }
};
// calling function
console.log(person.calcAge(1994));

/****************************************
 * Loops and Iteration
 */

// for loop
for (var i = 0; i < 10; i++ ) {
    console.log(i);
}

var Wycliffe = ['Wycliffe', 'Muchumi', 'Software Engineer', 26, 'false'];
for (var i = 0; i < Wycliffe.length; i++) {
    console.log(Wycliffe[i]);
}

// while loop
var i = 0;
while(i < Wycliffe.length) {
    console.log(Wycliffe[i]);
    i++;
}

// continue and break statements
// continue
var Wycliffe = ['Wycliffe', 'Muchumi', 'Software Engineer', 26, 'false'];
for (var i = 0; i < Wycliffe.length; i++) {
    // !== means different
    if (typeof Wycliffe[i] !== 'string') continue;
    console.log(Wycliffe[i]);
}

// break
for (var i = 0; i < Wycliffe.length; i++) {
    if (typeof Wycliffe[i] !== 'string') break;
    console.log(Wycliffe[i]);
}

// Looping backwards
for (var i = Wycliffe.length - 1; i >= 0; i--) {
    console.log(Wycliffe[i]);
}

/*****************************
 * Hoisting 
 */
// Normal function declaration
function calculateAge(birthYear) {
    console.log(2020 - birthYear);
}
calculateAge(1994);

// Hoisting in practice
// Below code execution occurs in global execution context
// Function is used before been declared
// calculateAge is stored in variable object before the code is executed hence made 
// available for use 

calculateAge(1994);
function calculateAge(birthYear) {
    console.log(2020 - birthYear);
}

// With function expressions

var retirement = function(birthYear) {
    console.log(65 - (2020 - birthYear));
}
retirement(1994);

// Hoisting
// Below will throw an error since hoisting works with function declarations only

retirement(1994);
var retirement = function(birthYear) {
    console.log(65 - (2020 - birthYear));
}

// Hoisting with variables
// Below code will throw undefined
// In creation phase of variable object, code is scanned for variable declarations then set to undefined

console.log(age);
var age = 26;
// console.log(age);

function foo() {
    var age = 46;
    // prints 46 since the variable age is stored in the variable object in execution context object of function foo
    console.log(age);
}
foo();

// prints 26 since the variable age is stored in the variable object in global execution context object
console.log(age);

// Scoping
// Code below is an example of lexical scoping
var a = 'Hello';
first();

function first() {  // has access to scope of the global variable a 
    var b = 'Hi!';
    second();

    function second() {  // has access to scope of the first() function and the global scope of global variable a
        var c = 'Hey';
        console.log(a + b + c);
        third();
    }
}

// Has access to scope of global variable a and scope of local variable d
function third() {
    var d = 'Muchumi';
    console.log(a+d);
}

/*************************************************
 * The this keyword
 */
// In a regular function call, the this keyword points at the global object, which is the window object in the browser
// In a method(function within an object) call, the this variable points to the object that is calling the method
// The this keyword is not assigned a value until a function where it is defined is actually called

// window object is the default object
// console.log(this);

calculateAge(1994);
function calculateAge(birthYear) {
    console.log(2020 - birthYear);
    console.log(this);
}

var person = {
    firstName: 'Wycliffe',
    lastName: 'Muchumi',
    occupation: 'Software Engineer',
    birthYear: 1994,
    family: ['Joyce', 'Abby', 'Miriam'],
    calculateAge: function() {
        console.log(this);
        console.log(2020 - this.birthYear);

        // below this keyword will point to the window object even after being declared in the calculateAge() method
        // this is because it is a regular function
        function innerFunction() {
            console.log(this);
        }
        innerFunction();
    }
}
person.calculateAge();

// Below JS code demonstrates method borrowing
var mammal = {
    name: 'lion',
    color: 'brown',
    birthYear: 2001,
    weight: '85 kg'
};
mammal.calculateAge = person.calculateAge;
mammal.calculateAge();

// Advanced JavaScript
// Object

var Wycliffe = {
    name: 'Wycliffe',
    birthYear: 1994,
    occupation: 'Software Engineer'
};

// Function Constructor/ BluePrint
// Function Constructor creates a new Function object.
// Calling the constructor directly can create functions dynamically, but suffers from security and performance issues
// Function Constructor identifier(name) to start with a capital letter

var Person = function (name, birthYear, occupation) {
    this.name = name;
    this.birthYear = birthYear;
    this.occupation = occupation;
    this.calculateAge = function () {
        console.log(2020-this.birthYear);
    }
}

Person.prototype.calculateAge = function () {
    console.log(2020-this.birthYear);
}

Person.prototype.lastName = 'Maina';

// Creating an instance/object of the Person constructor/ Instantiation
// new operator creates a new empty object, then the person constructor function is called with arguements specified

var Wycliffe = new Person('Wycliffe', 1994, 'Software Engineer');
var Miriam = new Person('Miriam', 1999, 'Economist and Finance Specialist');
var Joyce = new Person('Joyce', 1997, 'Nutritionist');
var Maurice = new Person('Maurice', 1998, 'Software Engineer');

Wycliffe.calculateAge();
Miriam.calculateAge();
Joyce.calculateAge();
Maurice.calculateAge();

console.log(Wycliffe.lastName);
console.log(Miriam.lastName);
console.log(Joyce.lastName);
console.log(Maurice.lastName);


// Using Object.create instead of function constructor
// Object.create method
// Helps in complex inheritance operations since it specifies which object is the prototype
var personPrototype = {
    calculateAge: function() {
        console.log(2020 - this.birthYear);
    }
};

var wycliffe = Object.create(personPrototype);
wycliffe.name = 'Wycliffe';
wycliffe.birthYear = 1994;
wycliffe.occupation = 'Software Engineer';

var miriam = Object.create(personPrototype, 
{
    name: { value: 'Wycliffe' },
    birthYear: { value: 1994 },
    occupation: { value: 'Software Engineer' }
});

// Primitives vs Objects
// Primitives

var a = 23;
var b = a;
// Mutate a 
a = 45;
console.log(a);
console.log(b);

// Objects
var objectOne = {
    name: 'Asher',
    age: 7
};

var objectTwo = objectOne;
objectOne.age = 14;
console.log(objectOne.age);
console.log(objectTwo.age);

// Functions
var age = 26;
var object = {
    name: 'Wycliffe',
    city: 'Nairobi'
};

function change(a, b) {
    a = 30;
    b.city = 'New York';
}

change(age, object);
console.log(age);
console.log(object.city);

// First class functions
// Passing functions as arguments

var years = [1994, 1997, 1999, 2010, 2015];

// Generic function
function arrayCalculate(arr,func) {
    var arrResults = [];
    for (var i = 0; i < arr.length; i++) {
        arrResults.push(func(arr[i]));
    }
    return arrResults;
}

function calculateAge(element) {
    return 2020 - element;
}

// Will return true or false 
function isFullAge(element) {
    return element >= 18;
}

function maxHeartRate(element) {
    if (element >= 18 && element <= 81) {
        // round function rounds off to next integer
        return Math.round(206.9 - (0.67 * element));
    } else {
        return -1;
    }   
}
var ages = arrayCalculate(years, calculateAge);
var fullAges = arrayCalculate(ages, isFullAge);
var rates = arrayCalculate(ages, maxHeartRate);
console.log(ages);
console.log(fullAges);
console.log(rates);

// Functions returning functions
function interviewQuestion(job) {
    if (job === 'designer') {
        return function(name) {
            console.log(name + ', can you please explain what UX design is?');
        }
    } else if (job === 'teacher') {
        return function(name) {
            console.log(name + ', what subject do you teach?');
        } 
    } else {
        return function(name) {
            console.log('Hello' + name + ', what do you do?');
        }
    }
}

var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');
// Calling variable teacherQuestion which is now a function
teacherQuestion('Harvey');
designerQuestion('Wycliffe');

// Second technique on how to do it
interviewQuestion('designer')('Maurice');

// Immediately Invoked Function Expressions(IIFE)
function game() {
    var score = Math.random() * 10;
    console.log(score >= 5);
}
game();

// IIFE(Data Privacy & Code Modularity)
(function(excellent){
    var score = Math.random() * 10;
    console.log(score >= 5 - excellent);
})(5);

// Closures
function retirement(retirementAge){
    var a = ' years left until retirement.';
    return function(birthYear){
        var age = 2020 - birthYear;
        console.log((retirementAge - age) + a);
    }
}

// var retirementUS = retirement(66);
// var retirementGermany = retirement(65);
// var retirementIceland = retirement(67);

// retirementGermany(1994);
// retirementUS(1994);
// retirementIceland(1994);


// Using closures
// Decision is made inside function being returned unlike previous function interviewQuestion
// Power of closures
function interviewQuestion(job){
    return function(name){
        if(job === 'designer'){
            console.log(name + ', can you please explain what UX design is?');
        } else if(job === 'teacher'){
            console.log(name + ', what subject do you teach?');
        } else {
            console.log('Hello' + name + ', what do you do?');
        }
    }
}

interviewQuestion('designer')('Wycliffe');
interviewQuestion('teacher')('Maurice');

// Bind, Call and Apply
var wycliffe = {
    name: 'Wycliffe',
    age: 26,
    job: 'Software Engineer',
    presentation: function(style, timeOfDay){
        if(style === 'formal'){
            console.log('Good ' + timeOfDay + ', Ladies and Gentlemen! I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
        } else if (style === 'friendly'){
            console.log('Hey what\'s up?, I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.Have a nice ' + timeOfDay + '.');
        }
    }
};

var anne = {
    name: 'Anne',
    age: 25,
    job: 'media personality',
};

wycliffe.presentation('formal', 'morning');
// Method Borrowing using call method
// Call helps set the this variable as the first arguement
wycliffe.presentation.call(anne, 'friendly', 'afternoon');

// Using apply instead of call 
// apply accepts array of elements passed as a parameter
wycliffe.presentation.apply(anne, ['friendly', 'afternoon']);

// Using bind
// bind is similar to call method 
// allows us to set the this variable explicitly however difference is bind does not call function immediately but generates a copy of the function
var wycliffeFriendly = wycliffe.presentation.bind(wycliffe, 'friendly');
wycliffeFriendly('morning');
wycliffeFriendly('night');

var anneFormal = wycliffe.presentation.bind(anne, 'formal');
anneFormal('afternoon');

// EcmaScript6/EcmaScript2015
// variable declarations with let and const

// Recap of ES5
var name5 = 'Jane Smith';
var age5 = 23;
// Mutate name5
name5 = 'Jane Miller';
console.log(name5);

// ES6 !!!!!!!!!!!!!
// const is for variable you dont want to change/mutate
// let is for variables you may need to change/mutate
const name6 = 'Jane Smith';
let age6 = 25;
console.log(name6);

// variables declared with var in ES5 are function scoped and
// variables declared with let and const in ES6 are block scoped

// ES5
function driversLicense5(passedTest){
    if(passedTest){
        var firstName = 'Wycliffe';
        var birthYear = 1994;
        console.log(firstName + ', born in ' + birthYear + ', is now officially allowed to drive a car.');
    }
}
 
driversLicense5(true);

// ES6
function driversLicense6(passedTest){
    if(passedTest){
        let firstName = 'Wycliffe';
        const birthYear = 1994;
        console.log(firstName + ', born in ' + birthYear + ', is now officially allowed to drive a car.');
    }
    // no longer have access to variables firstName and birthYear
    // will throw an error since let and const are block scoped(block is all code wrapped in curly braces)
    // console.log(firstName + ', born in ' + birthYear + ', is now officially allowed to drive a car.');
}
 
driversLicense6(true);

// Blocks & IIFES
// IIFES deny access to data to unauthorized users
// IIFES ensure data privacy
{
    const a = 1;
    let b = 2;
    console.log(a + b);
}


// Strings in ES6
let firstName = 'Wycliffe';
let lastName = 'Muchumi';
const yearOfBirth = 1994;

function calcAge(yearOfBirth){
    return 2021 - yearOfBirth;
}
// ES5
console.log('This is ' + firstName + ' ' + lastName + '.He was born in ' + yearOfBirth + '.Today he is ' + calcAge(1994) + ' years old.');

// ES6
// Template literals
console.log(`This is ${firstName} ${lastName}.He was born in ${yearOfBirth}.Today he is ${calcAge(yearOfBirth)} years old.`)

// String methods in ES6
const fullName = `${firstName} ${lastName}`;

console.log(fullName.startsWith('W'));
console.log(fullName.endsWith('i'));
console.log(fullName.includes('uchum'));
console.log(`${firstName} `.repeat(5));


// Arrow functions in ES6
const years = [1994, 1995, 1998, 1999];

// Using map method to loop over the years array
// ES5
var ages5 = years.map(function(element){
    return 2021 - element;
});
console.log(ages5);

// ES6
// Demonstrating arrow functions
// First form of implementing arrow functions with single argument
let ages6 = years.map(element => 2021 - element);
console.log(ages6);

// Second form of implementing arrow functions With multiple arguments
ages6 = years.map((element, index) => `Age element ${index + 1}: ${2021 - element}.`);
console.log(ages6);

// Third form of implementing arrow functions Incase of multiple statements to be executed, we use curly braces
ages6 = years.map((element, index) => {
    const now = new Date().getFullYear();
    const age = now - element;
    return `Age element ${index + 1}: ${age}.`
});
console.log(ages6);

// Arrow functions get to share the surrounding this keyword(this keyword of the function they are written in)
// Arrow functions have a lexical this keyword

// ES5
var box5 = {
    color: 'green',
    position: 1,
    clickOnMe: function(){
        // we have a html div class element by the class name of green
        // storing this into self
        // hack around to enable us access the box object
        var self = this;
        document.querySelector('.green').addEventListener('click',
        function(){
            var str = 'This is box number ' + self.position + ' and it is ' + self.color;
            alert(str);
        });
    }
}

box5.clickOnMe();

// ES6
const box6 = {
    color: 'green',
    position: 1,
    clickOnMe: () => {
        // we have a html div class element by the class name of green
        document.querySelector('.green').addEventListener('click',
       () => {
            var str = 'This is box number ' + this.position + ' and it is ' + this.color;
            alert(str);
        });
    }
} 
box6.clickOnMe();

// Destructuring in ES6
// Array to destructure
const person = ['John', 26];
// Destructuring
const[name, age] = ['John', 26];
console.log(name);
console.log(age);


// ES6 Object to destructure
const object = {
    firstName: 'Wycliffe',
    lastName: 'Muchumi'
};

// Use curly braces for destructuring an object
const {firstName, lastName} = object;
console.log(firstName);
console.log(lastName);

// Using different variable names other than the ones provided in the object
const{firstName: a, lastName: b} = object;
console.log(a);
console.log(b);

// Arrays in ES6
const boxes = document.querySelectorAll('.box');

// changing background color
// converting the list in boxes into an ES6 Array
const boxesArray6 = Array.from(boxes);
boxesArray6.forEach(cur => cur.style.backgroundColor = 'dodgerblue');

// Loops in ES6
// looping over an array using for of loop
// Using for of loop can allow use to use continue or break statements which we cannot use using forEach and map methods
for (const element of boxesArray6) {
    if (element.className === 'box blue'){
        continue;
    }   
    element.textContent = 'I changed to blue';
}

// Array Methods in ES6
// getting the index of the element that is greater than 18 years full age
let ages = [12, 17, 8, 21, 14, 11];
fullAge = ages.findIndex(cur => cur >= 18);
console.log(fullAge);

// retrieving the element at that index
fullAge2 = ages.find(cur => cur >= 18);
console.log(fullAge2);

// The Spread Operator in ES6 !
// Good way to expand the elements of an array

// function that adds four ages
function addFourAges(a,b,c,d){
    return a + b + c + d;
}
var sum1 = addFourAges(26, 28, 35, 42);
console.log(sum1);

// Passing array into the function
// ES5
var studentAges = [26, 28, 35, 42, 54];
 
// apply method receives an array
var sum2 = addFourAges.apply(null, studentAges);
console.log(sum2);

// ES6 
// The Spread Operator
const sum3 = addFourAges(...studentAges);
console.log(sum3);

// Joining two arrays using the spread operator
const muchumiFamily = ['Muchumi', 'Maina', 'Wangari', 'Wairimu', 'Njambi', 'Njeri'];

const annaFamily = ['Maurice', 'Anna', 'Taraji', 'Sharon'];

const bigFamily = [...muchumiFamily, 'Asher', ...annaFamily];
console.log(bigFamily);

// All query selectors return a node list
// Using the spread operator on the node list
const heading = document.querySelector('h1');

const boxes2 = document.querySelectorAll('.box');

const all = [heading, ...boxes2];

// Converting our (all) box node list into an array
Array.from(all).forEach(cur => cur.style.color = 'purple');

// Function Parameters
// Rest parameters in ES6
// Rest parameters allow us to pass an abirtrary number of arguments into a function and 
// convert them into an array
function isFullAge6(limit, ...years){
    // console.log(years);
    years.forEach(cur => console.log((2021 - cur) >= limit));
}
isFullAge6(18, 1994, 1997,1998,1999);
/*** 
NB: Spread Operator is used in function calls
    Rest parameter is used in function declaration
***/

// Default Parameters in ES6

















































