/* JavaScript Summary */

/*******************************************  
  ****************************************** 
  1. Data and structure types
  ****************************************** 
******************************************* */
undefined; // undefined
null; // null
true, false; // Boolean
"Yangon", "Mandalay"; // String
25, 1.2; // Number
{
  key: "value";
} // Object
() => {}; // Function

/*******************************************  
  ****************************************** 
  2. Variables
  ****************************************** 
******************************************* */
// var, let, const
// var (global, function scope), let and const (global, block scope {})
// global scope
var num1 = 10;
var myFunc = () => {
  // function scope
  var num2 = 20;
  console.log(num2);
};
console.log(num1);
console.log(num2);

{
  // block scope
  var num3 = 30;
  let num4 = 40;
  const num5 = 50;
}

console.log(num3);
console.log(num4); // cannot access num4 here here
console.log(num5); // cannot access num5 here here

var num1 = 10;
var num1 = 20; // replace num1 value

let num2 = 10;
num2 = 20; // update num2 value

const num3 = 10;
num3 = 20; // will raise error. cannot update const variable value

/*******************************************  
  ****************************************** 
  3. Operators
  ****************************************** 
******************************************* */
/* Arithmetic operators */
// + (Addition)
let num1 = 2;
let num2 = 3;
let num3 = num1 + num2; // num3 = 5

let str1 = "hello";
let str2 = "world";
let str3 = str1 + str2; // str3 = "helloworld" (String concatenation)
let str3 = str1 + " " + str2; // str3 = "hello world"

// - (Subtraction)
let num1 = 2;
let num2 = 3;
let num3 = num1 - num2; // num3 = -1

// * (Multiplication)
let num1 = 2;
let num2 = 5;
let num3 = num1 * num2; // num3 = 10

// / (Division)
let num1 = 6;
let num2 = 3;
let num3 = num1 / num2; // num3 = 2

// % (Remainder)
let num1 = 11;
let num2 = 3;
let num3 = num1 % num2; // num3 = 2

// ** (Exponent)
let num1 = 5;
let num2 = 2;
let num3 = num1 ** num2; // num3 = 25

/* Increment and decrement */
// ++
let num1 = 1;
let num2 = num1++; // num2 = 2

// --
let num1 = 1;
let num2 = num1--; // num2 = 0

// cannot do 1++ for example, must use a variable that is not constant(const)

/* Assignment operators */
// =
let num = 1;

// += (Addition assignment)
let num = 1;
num += 5; // num = 6

// -= (Subtraction assignment)
let num = 10;
num -= 5; // num = 5

// *= (Multiplication assignment)
let num = 5;
num *= 2; // num = 10

// /= (Division assignment)
let num = 10;
num /= 2; // num = 5

/* Comparison operators */
// == vs ===
let num = 5;
num == "5"; // output true
num === "5"; // output false

// != vs !==
let num = 5;
num != "5"; // output false
num !== "5"; // output true

// > (greater than) and < (less than)
let num1 = 2;
let num2 = 3;
num1 > num2; // output false
num1 < num2; // output true

// >= (greater than or equal to) and <= (less than or equal to)
let num1 = 2;
let num2 = 3;
num1 >= num2; // output false
num1 <= num2; // output true

/* Logical operators */
let num1 = 5;
let num2 = 10;

// && (and logical operator).
num1 > 3 && num2 < 10; // false
num1 < 7 && num2 > 5; // true

// || (or logical operator)
num1 > 3 || num2 < 10; // true
num1 > 7 || num2 < 5; // false
num1 >= 5 || num2 <= 10; // true

// ! (not logical operator)
!(num1 === num2); // true
!(num1 < num2); // false

let username = "test@gmail.com";
let password = "mypass";

username === "test@gmail.com" && password === "myPass";

/*******************************************  
  ****************************************** 
  4. Conditional Statements
  ****************************************** 
******************************************* */
// if
const num1 = 2;
let num2 = 0;
if (num1 === 5) {
  num2 += 5;
}

// else
if (num1 === 5) {
  num2 += 5;
} else {
  num2 += 10;
}

// else if
if (num1 === 2) {
  num2 += 5;
} else if (num1 < 3) {
  num2 += 8;
} else if (num1 < 5) {
  num2 += 200;
} else {
  num2 += 10;
}

if (num1 < 1) {
  num2 += 5;
} else if (num1 < 3) {
  num2 += 8;
} else if (num1 < 5) {
  num2 += 200;
} else {
  num2 += 10;
}

if (num1 < 3) {
  num2 += 10;
} else if (num1 < 3) {
  num2 += 8;
} else if (num1 < 5) {
  num2 += 200;
} else {
  num2 += 10;
}

/* 
  Airline ticket example 

  notMember = full price
  normalMember = 5% discount
  silverMember = 10% discount
  goldMember = 15% discount
  platinumMember = 20% discount
*/

const originalPrice = 100;
let totalPrice = 0;
let memberType = "notMember";

if (memberType === "normalMember") {
  totalPrice += 100 * 0.95;
} else if (memberType === "silverMember") {
  totalPrice += 100 * 0.9;
} else if (memberType === "goldMember") {
  totalPrice += 100 * 0.85;
} else if (memberType === "platinumMember") {
  totalPrice += 100 * 0.8;
} else {
  totalPrice = originalPrice;
}

// switch conditional statement
switch (expression) {
  case choice1:
    //run this code
    break;
  case choice2:
    //run this code
    break;
  default:
  // run this code if no case matches
}

// Example
const num1 = 2;
let num2 = 0;

switch (num1) {
  case 1:
    num2 += 1;
    break;
  case 2:
    num2 += 2;
    break;
  default:
    num2 += 3;
}

const clickedTab = "VIDEOS";

switch (clickedTab) {
  case "HOME":
    // 1) hide current show tab. 2) show home tab
    break;
  case "VIDEOS":
    // 1) hide current show tab. 2) show videos tab
    break;
  case "PLAYLISTS":
    // 1) hide current show tab. 2) show playlists tab
    break;
  case "CHANNELS":
    // 1) hide current show tab. 2) show channels tab
    break;
  case "DISCUSSION":
    // 1) hide current show tab. 2) show discussion tab
    break;
  case "ABOUT":
    // 1) hide current show tab. 2) show about tab
    break;
  default:
  // 1) hide current show tab. 2) show about tab
}

/*******************************************  
  ****************************************** 
  5. Function
  ****************************************** 
******************************************* */
// function declaration
// DRY = Don't Repeat Yourself
let num1 = 0;
// parameter
function calculate(number) {
  num1 = number ** 2;
  num1 += 4;
  num1 /= 2;
}

// value returning function
const calculate = (number) => {
  num1 = number ** 2;
  num1 += 4;
  num1 /= 2;
  return num1;
};

// call the declared function to use it
let result = calculate(5);
calculate(4);
calculate(3);

// Built-in function
alert("Hello world");
console.log("hello world");

// Why do we need function? To avoid repetitive code as below.
// for number = 5
let total = 0;
let number = 5;
// start
total = number * 2;
total += 4;
total /= 2;

// for number = 4
let total = 0;
let number = 4;
// start
total = number * 2;
total += 4;
total /= 2;

// for number = 3
let total = 0;
let number = 3;
// start
total = number * 2;
total += 4;
total /= 2;

/*******************************************  
  ****************************************** 
  6. Object
  ****************************************** 
******************************************* */
// why?
const num1 = 10;
const cityName = "Yangon";
const isLoggedIn = true;
/*
name = "Aung Paine"
age = 50
height = 180
city = "Yangon"
isActor = true
*/
{
} // empty object
const person1 = {
  name: "Aung Paine", // key value pair
  age: 50,
  height: 180,
  city: "Yangon",
  dateOfBirth: 1970,
  isActor: true,
  hobby: ["Chine-lone", "Football"],
  walk: () => {
    alert("Aung Paine is walking now..");
  },
  cat: {
    name: "meow",
    age: 5,
    personality: "playful",
    purchaseInfo: {
      date: "20.12.2020",
      price: 5000,
    },
  },
};

// Accessing object's properties and methods
// 1) dot notation
person1.name; // "Aung Paine"
person1.age;
person1.height;
person1.dateOfBirth;
person1.walk();

// 2) bracket notation
person1["name"];
person1["age"];
person1["age"];
person1["dateOfBirth"];
person1["walk"]();

// Accessing property inside nested object
person1.cat.purchaseInfo.price;
person1["cat"]["purchaseInfo"]["price"];

// Call method which name comes from a variable using bracket notation
const methodName = "walk";
person1[methodName]();

/*******************************************  
  ****************************************** 
  7. Array
  ****************************************** 
******************************************* */
{
} // empty object, unordered collection
[]; // empty array, ordered collection

// why?
const unordered = { z: "hello", 1: "world", a: "test" };
const ordered = [
  "Yangon",
  "Mandalay",
  "Myitkyina",
  "Taungyi",
  1,
  true,
  {
    name: "Aung Paine", // key value pair
    age: 50,
    height: 180,
    city: "Yangon",
    dateOfBirth: 1970,
    isActor: true,
    walk: () => {
      alert("Aung Paine is walking now..");
    },
    cat: {
      name: "meow",
      age: 5,
      personality: "playful",
      purchaseInfo: {
        date: "20.12.2020",
        price: 5000,
      },
    },
  },
];

ordered[6].cat.purchaseInfo.price;

// index starts at 0
// Accessing array element
ordered[0]; // index number starts at 0
ordered[1];
ordered[2];

// array.length property
ordered.length; // 4

// get last item from an array
const index = ordered.length - 1;
ordered[index];

// add element to the end of an array
ordered.push("Taungyi", "Test");

// add element to the begining of an array
ordered.unshift("Beijing");

// remove the last element from an array
let result = ordered.pop();

// remove element from the beginning of an array
ordered.shift();

// get index of an element
ordered.indexOf("Shanghai"); // -1

// remove element(s) by index position
ordered.splice(2, 2);

/*******************************************  
  ****************************************** 
  8. Loops
  ****************************************** 
******************************************* */
// DRY - Don't Repeat Yourself
const customers = [
  {
    name: "customer1",
    phoneNumber: "1234567",
    email: "customer1@gmail.com",
    dateOfBirth: "01.01.2000",
  },
  {
    name: "customer2",
    phoneNumber: "2345671",
    email: "customer2@gmail.com",
    dateOfBirth: "02.03.2001",
  },
  {
    name: "customer3",
    phoneNumber: "3456712",
    email: "customer3@gmail.com",
    dateOfBirth: "01.01.2002",
  },
  {
    name: "customer4",
    phoneNumber: "4567123",
    email: "customer4@gmail.com",
    dateOfBirth: "01.01.2003",
  },
];

// for loop
for (let i = 0; i < customers.length; i++) {
  let customerEmail = customers[i].email;
  let customerBirthday = customers[i].dateOfBirth;
  if (customerBirthday === "15.10") {
    sendingBirthdayDiscountEmail(customerEmail);
  } else {
    sendEmail(customerEmail);
  }
}

const sendEmail = (email) => {
  console.log("Sending email to: ", email);
};

const sendingBirthdayDiscountEmail = (email) => {
  console.log("Sending special birthday discount email to: ", email);
};

// get customers email
const customer1 = customers[0];
const customer1Email = customer1.email;
const customer2Email = customers[1].email;
const customer3Email = customers[2].email;
const customer4Email = customers[3].email;

// send email
sendEmail(customer1Email);
sendEmail(customer2Email);
sendEmail(customer3Email);
sendEmail(customer4Email);

for (let i = 0; i < 3; i++) {
  console.log("hello");
}

// iteration1, i = 0 --> will run for loop body
// iteration2, i = 1 --> will run for loop body
// iteration3, i = 2 --> will run for loop body
// iteration4, i = 3 --> will NOT run for loop body

const cities = ["Yangon", "Mandalay", "Myitkyina", "Beijing", "Shanghai"];
console.log(cities[0]); // "Yangon"
cities[1]; // "Mandalay"
cities[2]; // "Myitkyina"

for (let i = 0; i < cities.length; i++) {
  console.log(cities[i]);
}

const sendingBirthdayDiscountEmail = (email) => {
  console.log("Sending birthday discount email: ", email);
};

// for in loop
const customers = {
  name: "customer1",
  phoneNumber: "123456",
  email: "customer1@gmail.com",
};
for (let prop in customers) {
  console.log(customers[prop]);
}

// while loop
let validNumber = true;
while (validNumber) {
  let promptValue = prompt("Please enter a number between 1 and 100"); // "50"
  const parsedValue = parseInt(promptValue, 10); // 50
  if (parsedValue > 1 && parsedValue < 100) {
    console.log("Entered value: ", parsedValue);
    validNumber = false; // exit condition
  }
}

/*******************************************  
  ****************************************** 
  9. Error Handling
  ****************************************** 
******************************************* */
// try...catch
const users = ["Maria", "Marcus", "Ken", "Hannah"];

const showChatSidebar = () => {
  for (const i = 0; i < users.length; i++) {
    console.log("code to show user here..");
  }
};

const showLeftSidebar = () => {
  console.log("code to show left side bar here..");
};

const showMainFeed = () => {
  console.log("code to show main feed here..");
};

try {
  showChatSidebar();
} catch (err) {
  console.log("Catch error here: ", err);
}

showLeftSidebar();
showMainFeed();

/*******************************************  
  ****************************************** 
  10. Useful built-in operators, properties and methods
  ****************************************** 
******************************************* */
// String
const text = "Welcome To Myanmar";
text.toUpperCase(); // "WELCOME TO MYANMAR"
text.toLowerCase(); // "welcome to myanmar"
text.split(" "); // ["Welcome", "To", "Myanmar"]
text.split(""); // ["W", "e", "l", "c", "o", "m", "e", " ", "T", "o", " ", "M", "y", "a", "n", "m", "a", "r"]
text.indexOf("e"); // return 1
text.indexOf("T"); // return 8
text.length; // return 18
// string concatenation
"Welcome " + "to Myanmar";
const num1 = "23";
const num2 = parseInt(num1, 10);

// Number
const num1 = 20;
num1.toString(); // "20"

// Object
const customer = {
  name: "customer1",
  email: "customer1@gmail.com",
  gender: "famale",
};
Object.keys(customer); // ["name", "email", "gender"]
Object.values(customer); // ["customer1", "customer1@gmail.com", "famale"]
customer.hasOwnProperty("name"); // true
customer.hasOwnProperty("name2"); // false

// Array
const cities = ["Yangon", "Mandalay", "Myitkyina"];
cities.length; // 3
cities[cities.length - 1]; // "Myitkyina"
cities.push("Beijing"); // cities = ["Yangon", "Mandalay", "Myitkyina", "Beijing"]
cities.indexOf("Yangon"); // 0
cities.indexOf("Myitkyina"); // 2
cities.splice(0, 1); // cities = ["Mandalay", "Myitkyina"]
cities.pop(); // cities = ["Yangon", "Mandalay"]

const customers = [
  { name: "customer1", email: "customer1@gmail.com", gender: "female" },
  { name: "customer2", email: "customer2@gmail.com", gender: "male" },
  { name: "customer3", email: "customer3@gmail.com", gender: "female" },
  { name: "customer4", email: "customer4@gmail.com", gender: "male" },
];

// filter
customers.filter((element) => element.gender === "female");

// map
customers.map((element) => {
  element.location = "Yangon";
  return element;
});

// looping 2 dimensional (2D) array
const numbers = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
// nested loop
for (let i = 0; i < numbers.length; i++) {
  for (let j = 0; j < numbers[i].length; j++) {
    console.log("Current number is ", numbers[i][j]);
  }
}

// ternary operator
const isMale = true;
if (isMale) {
  console.log("Gender is male");
} else {
  console.log("Gender is not male");
}

isMale ? console.log("Gender is male") : console.log("Gender is not male");


// Homework 

const customers = [
  { name: "customer1", email: "customer1@gmail.com", gender: "female", age: 59},
  { name: "customer2", email: "customer2@gmail.com", gender: "male", age: 59},
  { name: "customer3", email: "customer3@gmail.com", gender: "male", age: 59},
  { name: "customer4", email: "customer4@gmail.com", gender: "female", age: 59},
  { name: "customer5", email: "customer5@gmail.com", gender: "male", age: 59},
]

for ( let i = 0; i < customers.length; i++) {
  let customersObject = customers[i];
  for ( let prop in customersObject) {
    console.log(customersObject[prop])
  }
}

/*
customer1
customer1@gmail.com
female
customer2
customer2@gmail.com
male
customer3
customer3@gmail.com
male
customer4
customer4@gmail.com
female
customer5
customer5@gmail.com
male
*/ 

for ( let i = 0; i < customers.length; i++) {
  let customersObject = customers[i];
  for ( let prop in customersObject) {
     if (prop === "email") {
      console.log("This is customer",i+1, "email: ",customersObject["email"]);
    } else {
      continue;
    }
     }
}