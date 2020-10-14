/******************** 
this session is about variables
and data types
*/
// the below js code prints out the message on the browser's developer console

console.log('Hello Python developer,Welcome to JavaScript !!!');

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













































